import http from './http-common';

export class CourseService {
    endpoint = "/courses";

    async getCoursesByPage(page: number, limit: number) {
        return await http.get(`${this.endpoint}/page/${page}/limit/${limit}`);
    }
}
