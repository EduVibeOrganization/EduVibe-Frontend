import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { CustomInputText } from '@/components/custom-input-text.component';
import { CustomSelectorComponent } from '@/components/custom-selector.component';
import { CustomInputSwitch } from '@/components/custom-input-switch.component';
import { CustomButtonDX } from '@/components/custom-button-dx.component';
import { ConferenceService } from '@/services/conference.service';
import { RoomResponseDTO } from '@/models/room-response.dto';

import "../app/assets/styles/public.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../app/assets/styles/conference-creation.css";
import { CustomRow } from './custom-row.component';

interface EditRoomDialogProps {
    visible: boolean;
    onHide: () => void;
    room: RoomResponseDTO | null;
    onUpdate: () => void;
}

export function EditRoomDialog({ visible, onHide, room, onUpdate }: EditRoomDialogProps) {
    const conferenceService = new ConferenceService();

    const [name, setName] = useState<string>('');
    const [privacy, setPrivacy] = useState<string>('');
    const [chatType, setChatType] = useState<string>('');
    const [enableScreenShare, setEnableScreenShare] = useState<boolean>(false);
    const [enable_hand_raising, setHandRaising] = useState<boolean>(false);
    const [enable_prejoin_ui, setPrejoinUI] = useState<boolean>(false);

    useEffect(() => {
        if (room) {
            setName(room.room_name);
            (room.privacy == "public")? setPrivacy("Público") : setPrivacy("Privado");
            if(room.enable_chat){
                (room.enable_advanced_chat)? setChatType("Avanzado") : setChatType("Básico");
            } else {
                setChatType("No");
            }
            (room.enable_screenshare)? setEnableScreenShare(false) : setEnableScreenShare(true);
            setHandRaising(room.enable_hand_raising);
            setPrejoinUI(room.enable_prejoin_ui);
        }
    }, [room]);

    const handleUpdateRoom = async () => {
        try {
            const privacySelected = (privacy == "Público")? "public" : "private";
            const chatSelected = (chatType == "No")? false : true;
            const advacedChat = (chatType == "Básico")? false : true;
            await conferenceService.updateRoom(
                name, 
                privacySelected, 
                {
                    enable_chat: chatSelected,
                    enable_advanced_chat: advacedChat,
                    enable_screenshare: enableScreenShare,
                    enable_hand_raising: enable_hand_raising,
                    enable_prejoin_ui: enable_prejoin_ui
                }
            );
            onUpdate();
            onHide();
            alert("Sala actualizada correctamente");
        } catch (error) {
            alert("Error al actualizar la sala");
            console.error("Error al actualizar la sala:", error);
        }
    };

    const handleDeleteRoom = async () => {
        try {
            await conferenceService.deleteRoom(name);
            onUpdate();
            onHide();
            alert("Sala eliminada correctamente");
        } catch (error) {
            alert("Error al eliminar la sala");
            console.error("Error al eliminar la sala:", error);
        }
    }

    const footerTemplate = () => {
        return (
            <div>
                <CustomButtonDX 
                    title="Actualizar Sala" 
                    onSubmit={handleUpdateRoom} 
                    icon="pi pi-check"
                />
                <CustomButtonDX 
                    title="Eliminar Sala" 
                    onSubmit={handleDeleteRoom}
                    color='red'
                    icon="pi pi-trash"
                />
            </div>
        );
    }

    return (
        <Dialog header={`Editar Sala: ${room?.room_name}`} visible={visible} style={{ width: '500px' }} modal onHide={onHide} footer={footerTemplate}>
                <div className="card">
                    <CustomRow 
                        label={'Privacidad'} 
                        component={<CustomSelectorComponent value={privacy} options={["Privado", "Público"]} onChange={setPrivacy} />}
                    />
                    <CustomRow 
                        label={'Chat de Texto'} 
                        component={<CustomSelectorComponent value={chatType} options={["No", "Básico", "Avanzado"]} onChange={setChatType}/>}
                    />
                    <CustomRow
                        label={'Compartir Pantalla'}
                        component={<CustomInputSwitch initialValue={enableScreenShare} onChange={setEnableScreenShare} />}
                    />
                    <CustomRow 
                        label={'Levantar la mano'} 
                        component={<CustomInputSwitch initialValue={enable_hand_raising} onChange={setHandRaising} />}
                    />
                    <CustomRow 
                        label={'Sala de espera'} 
                        component={<CustomInputSwitch initialValue={enable_prejoin_ui} onChange={setPrejoinUI} />}
                    />
                </div>
        </Dialog>
    );
}
