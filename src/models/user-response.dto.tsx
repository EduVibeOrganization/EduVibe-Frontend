export class UserResponseDTO{
    id: number;
    email: string;
    username: string;
    thumbnail: string;
    phoneNumber: string;
    userRole:string;

    constructor(id: number, email: string, username: string, thumbnail: string, phoneNumber: string, userRole: string){
        this.id = id;
        this.email = email;
        this.username = username;
        this.thumbnail = thumbnail;
        this.phoneNumber = phoneNumber;
        this.userRole = userRole;
    }
}