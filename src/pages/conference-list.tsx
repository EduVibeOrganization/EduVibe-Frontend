import { useEffect, useState } from 'react';
import { OrderList } from 'primereact/orderlist';
import { FaLock } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { CustomSideBar } from '@/components/custom-sidebar.component';
import { ConferenceService } from '@/services/conference.service';
import { RoomResponseDTO } from '@/models/room-response.dto';
import { CustomButtonDX } from '@/components/custom-button-dx.component';
import { EditRoomDialog } from '@/components/edit-conference.dialog';

import "../app/assets/styles/conference-list.css";
import "../app/assets/styles/public.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function ConferenceList() {
    const [rooms, setRooms] = useState<RoomResponseDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedRoom, setSelectedRoom] = useState<RoomResponseDTO | null>(null);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const conferenceService = new ConferenceService();

    const getAllRooms = async () => {
        try {
            const response = await conferenceService.getRooms();
            setRooms(response);
        } catch (error) {
            console.error("Error al obtener las salas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { getAllRooms(); }, []);

    const roomTemplate = (room: RoomResponseDTO) => {
        const privacyIcon = room.privacy === "private" ? <FaLock className="text-red-500" /> : <TfiWorld className="text-green-500" />;

        return (
            <div className="room-list" onClick={() => { setSelectedRoom(room); setDialogVisible(true); }}>
                <div className="room-item">
                    {privacyIcon}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{room.room_name}</h2>
                        <p className="text-sm text-gray-500 capitalize">{room.privacy}</p>
                    </div>
                </div>
                <div>
                    <CustomButtonDX
                        title="Unirse"
                        size='small'
                        icon="pi pi-sign-in"
                        iconPosition="right"
                        onSubmit={(e: any) => {
                            e.stopPropagation();
                            window.open(`/conference-screen-simplified?room=${room.room_name}`, '_blank', 'noopener,noreferrer');
                        }}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSideBar />
                <div className="list-container">
                    <h1 className="title">Lista de Conferencias</h1>
                    {loading ? (<p>Cargando salas...</p>) : rooms.length === 0 ? (<p>No hay salas disponibles.</p>) : (
                        <div className="order-list">
                            <OrderList
                                dataKey="room_name"
                                value={rooms}
                                itemTemplate={roomTemplate}
                                header="Salas Disponibles"
                                dragdrop
                                filter
                                filterBy="room_name"
                                style={{ width: '100%' }}
                            />
                        </div>
                    )}
                </div>
                <EditRoomDialog
                    visible={dialogVisible}
                    onHide={() => {
                        setDialogVisible(false);
                        setSelectedRoom(null);
                    }}
                    room={selectedRoom}
                    onUpdate={getAllRooms}
                />
            </div>
        </div>
    );
}

export default ConferenceList;
