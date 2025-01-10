import http from "./http-common";

export class ConferenceService {
    endpoint = "/rooms"

    getRooms(){
        return http.get(this.endpoint);
    }

    getRoomByName(name: string){
        return http.get(`${this.endpoint}/${name}`);
    }

    getRoomByNameWithPresence(name: string){
        return http.get(`${this.endpoint}/${name}/presence`);
    }

    createRoom(name: string, privacy: string, properties: Record<string, any>){
        return http.post(this.endpoint, {name,privacy, properties});
    }

    updateRoom(name: string, privacy?: string, properties?: Record<string, any> ) {
        return http.post(`${this.endpoint}/rooms/${name}`, {name,privacy, properties});
    }

    deleteRoom(name: string){
        return http.delete(`${this.endpoint}/${name}`);
    }
}