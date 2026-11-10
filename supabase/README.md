# Supabase setup

1. In the Supabase project, open **SQL Editor**, run [`schema.sql`](./schema.sql), and enable email/password sign-in under **Authentication → Providers**.
2. In **Project Settings → API**, copy the project URL and the publishable (or legacy `anon`) key. Put them in `js/supabase-config.js`. Never put a `service_role` or secret key in browser code.
3. In **Authentication → URL Configuration**, add the deployed site's URL to the allowed redirect URLs. During local development, add the local origin (for example `http://localhost:8080/**`).
4. Open the site using its web server, then register as a student or teacher at `auth.html`. Supabase Auth stores and verifies passwords; `public.profiles` stores usernames and role-specific profile data, not plaintext passwords.
5. Teacher registrations start unapproved. Verify a teacher outside the browser, then approve them in the Supabase SQL Editor:

   ```sql
   update public.profiles
   set is_approved = true
   where username = 'teacher_username' and role = 'teacher';
   ```

The browser uses only the publishable/anon key. Row-level security lets each signed-in user read only their own profile, and users cannot change their profile role or approval status.
