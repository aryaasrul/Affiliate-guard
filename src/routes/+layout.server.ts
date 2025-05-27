// filepath: src/routes/+layout.server.ts
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  if (url.pathname === '/login') {
    return {};
  }

  const session = await locals.getSession();

  if (!session) {
    throw redirect(303, '/login');
  }

  return {
    session
  };
};