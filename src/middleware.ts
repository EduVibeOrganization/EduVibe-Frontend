import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const payload = atob(token?.split('.')[1] || '');
    const pathname = request.nextUrl.pathname;
    try{

        if (!token && !['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname)) {
            return NextResponse.redirect(new URL('/sign-in', request.url));
        }

        const role = JSON.parse(payload).roles[0]

        if (token && ['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname) && role === 'STUDENT') {
            return NextResponse.redirect(new URL('/home-student', request.url));
        }

        if (token && ['/sign-in', '/', '/sign-up', '/recover-password', '/select-role'].includes(pathname) && role === 'TEACHER') {
            return NextResponse.redirect(new URL('/home-teacher', request.url));
        }

        if(token && role === 'STUDENT' && ['/home-teacher','/teacher-information', '/create-course', '/admin-user', '/admin-account', '/admin-authorization', '/admin-business'].includes(pathname)) {
            return NextResponse.redirect(new URL('/home-student', request.url));
        }

        if(token && role === 'TEACHER' && ['/home-student', '/student-information', '/course-complete', '/admin-user', '/admin-account', '/admin-authorization', '/admin-business'].includes(pathname)) {
            return NextResponse.redirect(new URL('/home-teacher', request.url));
        }
        return NextResponse.next();
    } catch(_){
    }
    
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
        '/create-course',
        '/course-video',
        '/teacher-information',
        '/transaction-student', 
        '/transaction-teacher',
        '/admin-user', 
        '/admin-account', 
        '/admin-authorization', 
        '/admin-business'
    ],
};