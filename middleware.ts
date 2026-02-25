import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protected routes — redirect to /login if not authenticated
// (Auth state here comes from a cookie/session; update this when iron-session is integrated)
const PROTECTED_ROUTES = ['/profile', '/post-job', '/wallet'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (isProtected) {
    // TODO: check session cookie from iron-session when backend auth is integrated
    // const session = await getIronSession(request, response, sessionOptions);
    // if (!session.user) return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/post-job', '/wallet'],
};
