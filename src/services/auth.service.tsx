import { SignInDTO } from "@/models/sign-in.dto"
import http from "./http-common"
import { SignInResponseDTO } from "@/models/sign-in-response.dto";
import { SignUpDTO } from "@/models/sign-up.dto";

export class AuthService {
    endpoint = "/auth"

    async signIn(signInDTO: SignInDTO): Promise<SignInResponseDTO> {
        return await http.post(`${this.endpoint}/sign-in`, JSON.stringify(signInDTO));
    }

    async signUp(signUpDTO: SignUpDTO): Promise<any> {
        return await http.post(`${this.endpoint}/sign-up`, JSON.stringify(signUpDTO));
    }
}