import http from "./http-common";

export class SectionService {
    endpoint = "/sections"

    async getSectionsByCourseId(id: number) : Promise<any> {
        return await http.get(`${this.endpoint}/course/${id}`);
    }
}