import { RoomUser } from "./room-user-response.dto";

export class RoomPresenceResponseDTO {
    room_name: string;
    total_count: number;
    users: RoomUser[];

    constructor(
        room_name: string,
        total_count: number,
        users: RoomUser[]
    ){
        this.room_name = room_name;
        this.total_count = total_count;
        this.users = users;
    }
}