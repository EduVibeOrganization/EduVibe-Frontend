import http from "./http-common";

export class UserService {
    endpoint = "/users";
    async getUserById(id: number) : Promise<any> {
        return await http.get(`${this.endpoint}/${id}`);
    }
}