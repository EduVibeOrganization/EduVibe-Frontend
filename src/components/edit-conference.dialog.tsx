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
    const [privacy, setPrivacy] = useState<string>('private');
    const [enableChat, setEnableChat] = useState<string>("Básico");
    const [enableScreenShare, setEnableScreenShare] = useState<boolean>(false);
    const [enable_hand_raising, setHandRaising] = useState<boolean>(false);
    const [enable_prejoin_ui, setPrejoinUI] = useState<boolean>(false);

    useEffect(() => {
        if (room) {
            setName(room.room_name);
            setPrivacy(room.privacy);
            if(room.enable_chat){
                (room.enable_advanced_chat)? setEnableChat("Avanzado") : setEnableChat("Básico");
            } else {
                setEnableChat("No");
            }
            setEnableScreenShare(room.enable_screenshare);
        }
    }, [room]);

    const handleUpdateRoom = async () => {
        try {
            await conferenceService.updateRoom(name, privacy, {
                enable_chat: enableChat,
                enable_screenshare: enableScreenShare,
                enable_hand_raising: enable_hand_raising,
                enable_prejoin_ui: enable_prejoin_ui
            });
            onUpdate();
            onHide();
            alert("Sala actualizada correctamente");
        } catch (error) {
            alert("Error al actualizar la sala");
            console.error("Error al actualizar la sala:", error);
        }
    };

    const footerTemplate = () => {
        return (
            <div>
                <CustomButtonDX 
                    title="Actualizar Sala" 
                    onSubmit={handleUpdateRoom} 
                    icon="pi pi-check"
                />
            </div>
        );
    }

    return (
        <Dialog header={`Editar Sala: ${room?.room_name}`} visible={visible} style={{ width: '500px' }} modal onHide={onHide} footer={footerTemplate}>
                <div className="card">
                    <CustomRow 
                        label={'Privacidad'} 
                        component={<CustomSelectorComponent value={privacy} options={['private', 'public']} onChange={setPrivacy} />}
                    />
                    <CustomRow 
                        label={'Chat de Texto'} 
                        component={<CustomSelectorComponent value={enableChat} options={["No", "Básico", "Avanzado"]} onChange={setEnableChat}/>}
                    />
                    <CustomRow
                        label={'Compartir Pantalla'}
                        component={<CustomInputSwitch onChange={setEnableScreenShare} />}
                    />
                    <CustomRow 
                        label={'Levantar la mano'} 
                        component={<CustomInputSwitch onChange={setHandRaising} />}
                    />
                    <CustomRow 
                        label={'Sala de espera'} 
                        component={<CustomInputSwitch onChange={setPrejoinUI} />}
                    />
                </div>
        </Dialog>
    );
}
