import http from "./http-common";

export class CategoryService {
    endpoint = "/categories";

    async getCategories(): Promise<Array<any>> {
        return await http.get(this.endpoint);
    }
}