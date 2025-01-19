import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const payload = atob(token?.split('.')[1] || '');
    const role = JSON.parse(payload).roles[0]
    const pathname = request.nextUrl.pathname;

    if (!token && !['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname)) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (token && ['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname) && role === 'STUDENT') {
        return NextResponse.redirect(new URL('/home-student', request.url));
    }

    if (token && ['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname) && role === 'TEACHER') {
        return NextResponse.redirect(new URL('/home-teacher', request.url));
    }

    if(role === 'STUDENT' && ['/home-teacher', '/conference-creation',  '/teacher-information'].includes(pathname)) {
        return NextResponse.redirect(new URL('/home-student', request.url));
    }

    if(role === 'TEACHER' && ['/home-student'].includes(pathname)) {
        return NextResponse.redirect(new URL('/home-teacher', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/sign-in',
        '/',
        '/sign-up',
        '/home-student',
        '/home-teacher',
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
        '/teacher-information'
    ],
};
