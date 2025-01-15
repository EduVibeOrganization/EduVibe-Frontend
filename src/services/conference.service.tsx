import { RoomResponseDTO } from "@/models/room-response.dto";
import http from "./http-common";
import { RoomPresenceResponseDTO } from "@/models/room-presence-response.dto";

export class ConferenceService {
    endpoint = "/rooms"

    async getRooms(): Promise<RoomResponseDTO[]> {
        const response = await http.get(this.endpoint);
        return response.data ?? [];
    }

    getRoomByName(name: string): Promise<RoomResponseDTO> {
        return http.get(`${this.endpoint}/${name}`);
    }

    getRoomByNameWithPresence(name: string): Promise<RoomPresenceResponseDTO>{
        return http.get(`${this.endpoint}/${name}/presence`);
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