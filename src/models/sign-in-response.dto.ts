export class SignInResponseDTO{
    email: string;
    id: number;
    username: string;
    token: string;
    constructor(email: string, id: number, username: string, token: string){
        this.email = email;
        this.id = id;
        this.username = username;
        this.token = token;
    }
}