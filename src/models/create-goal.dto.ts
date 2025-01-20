export class CreateGoalDTO{
    title: string;
    courses_id: number;
    constructor (title: string, courseId: number) {
        this.title = title;
        this.courses_id = courseId;
    }
}