import { ShoppingCartResponseDTO } from "@/models/shopping-cart-response.dto";
import http from "./http-common";
import { ShoppingCartRequestDTO } from "@/models/shopping-cart-request.dto";

export class ShoppingCartService {
    endpoint = "/shopping-cart";

    async addCourseToCart(shoppingCartRequestDTO: ShoppingCartRequestDTO): Promise<string> {
        return await http.post(this.endpoint,shoppingCartRequestDTO);
    }

    async deleteCourseFromShoppingCart(shoppingCartRequestDTO: ShoppingCartRequestDTO): Promise<string> {
        return await http.delete(this.endpoint, {data: shoppingCartRequestDTO});
    }

    async getAllShoppingCarts(): Promise<ShoppingCartResponseDTO[]> {
        const response = await http.get(this.endpoint);
        return response.data;
    }

    async getShoppingCartByUserId(userId: number): Promise<ShoppingCartResponseDTO>{
        const response = await http.get(`${this.endpoint}/${userId}`);
        return response.data;
    }
}