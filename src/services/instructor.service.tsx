import { CreateInstructorDTO } from "@/models/create-instructor.dto";
import http from "./http-common";

export class InstructorService{
    endpoint = "/instructors";

    async createInstructor(instructorRequest: CreateInstructorDTO){
        return await http.post(this.endpoint, JSON.stringify(instructorRequest));
    }
    async deleteInstructor(instructorId: number){
        return await http.delete(`${this.endpoint}/${instructorId}`);
    }

    async getInstructorById(instructorId: number){
        return await http.get(`${this.endpoint}/${instructorId}`);
    }
    async getInstructorByName(instructorName: string){
        return await http.get(`${this.endpoint}/get-by-name/${instructorName}`);
    }
}