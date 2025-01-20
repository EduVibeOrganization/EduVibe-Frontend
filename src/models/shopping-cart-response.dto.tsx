export class ShoppingCartResponseDTO {
    userId: number;
    courseIds: number[];

    constructor(userId: number, courseIds: number[]){
        this.userId = userId;
        this.courseIds = courseIds;
    }
}