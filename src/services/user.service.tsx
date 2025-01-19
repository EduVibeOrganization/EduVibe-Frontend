import { UserResponseDTO } from "@/models/user-response.dto";
import http from "./http-common";

export class UserService {
    endpoint = "/users";

    async getAllUsers(): Promise<UserResponseDTO[]> {
        const response = await http.get(`${this.endpoint}`);
        return response.data ?? [];
    }

    async getUserById(id: number) : Promise<any> {
        return await http.get(`${this.endpoint}/${id}`);
    }
}