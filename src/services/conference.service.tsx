import { RoomResponseDTO } from "@/models/room-response.dto";
import { RoomPresenceResponseDTO } from "@/models/room-presence-response.dto";
import http from "./http-common";

export class ConferenceService {
    endpoint = "/rooms"

    async getRooms(): Promise<RoomResponseDTO[]> {
        const response = await http.get(this.endpoint);
        return response.data ?? [];
    }

    getRoomByName(name: string): Promise<RoomResponseDTO> {
        return http.get(`${this.endpoint}/${name}`);
    }

    async getRoomByNameWithPresence(name: string): Promise<RoomPresenceResponseDTO>{
        const response = await http.get(`${this.endpoint}/${name}/presence`);
        return new RoomPresenceResponseDTO(
            response.data.room_name,
            response.data.total_count,
            response.data.users
        );
    }

    createRoom(name: string, privacy: string, properties: Record<string, any>): Promise<RoomResponseDTO>{
        return http.post(this.endpoint, {name,privacy, properties});
    }

    updateRoom(name: string, privacy?: string, properties?: Record<string, any> ) {
        return http.post(`${this.endpoint}/${name}`, {name,privacy, properties});
    }

    deleteRoom(name: string){
        return http.delete(`${this.endpoint}/${name}`);
    }
}