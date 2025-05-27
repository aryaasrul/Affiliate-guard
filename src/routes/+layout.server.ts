import { redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, request, url }) => {
  // ✅ Kecualikan halaman /login agar tidak ter-redirect balik
  if (url.pathname === '/login') {
    return {};
  }

  const supabase = createServerClient(
    'https://ymqvzbqmtuevnhickftn.supabase.co', // 🔁 GANTI dengan Supabase URL Paduka
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcXZ6YnFtdHVldm5oaWNrZnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDY1NjksImV4cCI6MjA2MzgyMjU2OX0.sgY7EckE5n6ubALVLaqzke3nYzWu0xVDTCBDnE1pjc8',             // 🔁 GANTI dengan anon public key Paduka
    {
      cookies: {
        get(name: string) {
          return cookies.get(name);
        },
        set(name: string, value: string, options: any) {
          cookies.set(name, value, options);
        },
        remove(name: string, options: any) {
          cookies.delete(name, options);
        }
      }
    }
  );

  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    throw redirect(303, '/login');
  }

  return {
    user: session.user
  };
};
