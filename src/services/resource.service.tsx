import http from "./http-common";

export class ResourceService {
    endpoint = "/resources"

    async getResourcesBySectionId(id: number) : Promise<any> {
        return await http.get(`${this.endpoint}/section/${id}`);
    }

    async getResourceBySectionId(id: number) : Promise<any> {
        return await http.get(`${this.endpoint}/section/${id}`);
    }
}