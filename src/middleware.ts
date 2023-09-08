import { NextRequest, NextResponse } from 'next/server'


export function middleware(req: NextRequest, res: NextResponse) {
  console.log('MIDDLEWARE - start');
  const loginUrl = '/pages/login/'
  const { pathname } = req.nextUrl;
  let session = req.cookies.get("session");



  if ([undefined, null, ''].includes(session)) {
    console.log('Session expired. Redirecting...');
    req.nextUrl.pathname = loginUrl;
    return NextResponse.redirect(req.nextUrl);
  }
  else return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/((?!api|_next/static|_next/image|favicon.ico|pages/login).*)',
]
}