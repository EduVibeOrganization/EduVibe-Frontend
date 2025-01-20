import { CourseRequestDTO } from '@/models/course-request.dto';
import http from './http-common';

export class CourseService {
    endpoint = "/courses";

    async getCoursesByPage(page: number, limit: number) {
        return await http.get(`${this.endpoint}/page/${page}/limit/${limit}`);
    }

    async createCourse(courseRequest: CourseRequestDTO){
        return await http.post(this.endpoint, JSON.stringify(courseRequest));
    }

    async getCourseById(id: number) {
        return await http.get(`${this.endpoint}/${id}`);
    }
}
