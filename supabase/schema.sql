create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null check (username ~ '^[A-Za-z0-9_]{3,30}$'),
  display_name text not null check (length(btrim(display_name)) between 1 and 100),
  role text not null check (role in ('student', 'teacher')),
  grade smallint,
  subject text check (subject is null or length(btrim(subject)) <= 100),
  is_approved boolean not null default false,
  created_at timestamptz not null default now(),
  constraint student_grade_valid check (grade is null or grade = 8),
  constraint profile_role_fields_valid check (
    (role = 'student' and grade = 8 and subject is null)
    or (role = 'teacher' and grade is null)
  )
);

create unique index if not exists profiles_username_ci_unique
  on public.profiles (lower(username));

alter table public.profiles enable row level security;
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
  on public.profiles
  for select
  to authenticated
  using ((select auth.uid()) = id);

create or replace function public.create_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  profile_role text := new.raw_user_meta_data ->> 'role';
  profile_grade smallint;
begin
  if profile_role not in ('student', 'teacher') then
    raise exception 'Invalid profile role';
  end if;

  if profile_role = 'student' then
    if new.raw_user_meta_data ->> 'grade' <> '8' then
      raise exception 'Invalid student grade';
    end if;
    profile_grade := 8;
  end if;

  insert into public.profiles (id, username, display_name, role, grade, subject)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'display_name',
    profile_role,
    profile_grade,
    case when profile_role = 'teacher' then nullif(new.raw_user_meta_data ->> 'subject', '') end
  );
  return new;
end;
$$;

drop trigger if exists create_profile_after_signup on auth.users;
create trigger create_profile_after_signup
  after insert on auth.users
  for each row execute procedure public.create_profile_for_new_user();
