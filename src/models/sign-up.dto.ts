export class SignUpDTO {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;
    thumbnail: string;
    roleId: number;
    constructor(email: string, password: string, username: string, phoneNumber: string, thumbnail: string, roleId: number){
        this.email = email;
        this.password = password;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.thumbnail = thumbnail;
        this.roleId = roleId;
    }
}