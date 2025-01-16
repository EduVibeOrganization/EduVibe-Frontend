import http from "./http-common";

export class GoalService {
    endpoint = "/goals";
    async getGoalsByCourseId(courseId: number) {
        return await http.get(`${this.endpoint}/course/${courseId}`);
    }
}