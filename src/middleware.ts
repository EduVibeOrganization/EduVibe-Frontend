import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;

    if (!token && !['/sign-in', '/', '/sign-up', '/recover-password'].includes(pathname)) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (token && ['/sign-in', '/', '/sign-up', '/recover-password'].includes(pathname)) {
        return NextResponse.redirect(new URL('/home-student', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/sign-in',
        '/',
        '/sign-up',
        '/home-student',
        '/recover-password',
        '/help-center-student',
        '/help-center-teacher',
        '/conference-creation',
        '/conference-left',
        '/conference-list',
    ],
};
