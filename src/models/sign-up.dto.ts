export class SignUpDTO {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    thumbnail: string;
    constructor(email: string, password: string, username: string, phoneNumber: string, thumbnail: string){
        this.email = email;
        this.password = password;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.thumbnail = thumbnail;
    }
}