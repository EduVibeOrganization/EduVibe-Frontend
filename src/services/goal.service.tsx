import { CreateGoalDTO } from "@/models/create-goal.dto";
import http from "./http-common";

export class GoalService {
    endpoint = "/goals";
    async getGoalsByCourseId(courseId: number) {
        return await http.get(`${this.endpoint}/course/${courseId}`);
    }

    async createGoal(goalRequest: CreateGoalDTO){
        return await http.post(this.endpoint, JSON.stringify(goalRequest));
    }
}