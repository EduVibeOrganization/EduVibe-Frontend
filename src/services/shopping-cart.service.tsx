import http from "./http-common";
import { CourseDTO } from "@/models/course.dto"; // Asegúrate de importar correctamente el tipo CourseDTO

// La clase debe ser exportada como clase (no como un objeto o función)
export class ShoppingCartService {
    endpoint = "/shopping-cart";

    // Obtener el carrito actual
    async getShoppingCart(): Promise<CourseDTO[]> {
        const response = await http.get(this.endpoint);
        return response.data;
    }

   // Agregar un curso al carrito
    async addCourseToCart(courseId: number, userId: number): Promise<any> {
    return await http.post(this.endpoint, { courseId, userId });
    }


    // Eliminar un curso del carrito
    async removeCourseFromCart(courseId: number): Promise<any> {
        return await http.delete(`${this.endpoint}/${courseId}`);
    }

    // Vaciar el carrito (opcional)
    async clearCart(): Promise<any> {
        return await http.delete(this.endpoint);
    }
}
