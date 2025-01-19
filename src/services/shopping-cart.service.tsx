import http from "./http-common";
import { CourseDTO } from "@/models/course.dto";

export class ShoppingCartService {
    endpoint = "/shopping-cart";

    async getShoppingCart(): Promise<CourseDTO[]> {
        const response = await http.get(this.endpoint);
        return response.data;
    }


    async addCourseToCart(courseIds: number[], userId: number): Promise<any> {
    return await http.post(this.endpoint, { courseIds, userId });
    }


    async removeCourseFromCart(courseId: number): Promise<any> {
        return await http.delete(`${this.endpoint}/${courseId}`);
    }


}
