export class RoomResponseDTO {
    room_name: string;
    url: string;
    privacy: string;
    enable_chat: boolean;
    enable_advanced_chat: boolean;
    enable_screenshare: boolean;
    enable_hand_raising: boolean;
    enable_prejoin_ui: boolean;

    constructor(
        room_name: string,
        url: string,
        privacy: string,
        enable_chat?: boolean,
        enable_advanced_chat?: boolean,
        enable_screenshare?: boolean,
        enable_hand_raising?: boolean,
        enable_prejoin_ui?: boolean
    ){
        this.room_name = room_name;
        this.url = url;
        this.privacy = privacy ?? "public";
        this.enable_chat = enable_chat ?? false;
        this.enable_advanced_chat = enable_advanced_chat ?? false;
        this.enable_screenshare = enable_screenshare ?? true;
        this.enable_hand_raising = enable_hand_raising ?? false;
        this.enable_prejoin_ui = enable_prejoin_ui ?? false;
    }
}