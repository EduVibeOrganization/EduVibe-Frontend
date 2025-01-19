import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;

    if (!token && !['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname)) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (token && ['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname)) {
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
        '/my-profile',
        '/contact',
        '/select-role',
        '/conference-screen-simplified',
        '/conference-screen',
        '/confirm-password',
        '/courses',
        '/course-info',
        '/course-video',
        '/teacher-information',
        '/admin-authorization',
        '/admin-businness',
        '/admin-complains-book',
        '/admin-contact',
        '/admin-event',
        '/admin-privacy-policy',
        '/admin-qa',
        '/admin-shopping',
        '/admin-sites',
        '/admin-terms-conditions', 

    ],
};
