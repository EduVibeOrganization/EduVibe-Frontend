export class Profile{
    username: string;
    email: string;
    phoneNumber: string;
    role: string;

    constructor(username: string, email: string, phoneNumber: string, role: string){
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}