import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { OrderList } from 'primereact/orderlist';
import { FaLock } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { CustomButton } from '@/components/custom-button.component';
import { CustomSideBar } from '@/components/custom-sidebar.component';
import { ConferenceService } from '@/services/conference.service';
import { RoomResponseDTO } from '@/models/room-response.dto';
import "../app/assets/styles/conference-list.css"
import "../app/assets/styles/public.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";

function ConferenceList() {
    const router = useRouter();
    const [rooms, setRooms] = useState<RoomResponseDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
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
        const privacyIcon = room.privacy === "private" ? (
            <FaLock className="text-red-500" title="Privada" />
        ) : (
            <TfiWorld  className="text-green-500" title="Pública" />
        );

        return (
            <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center gap-4">
                    {privacyIcon}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{room.room_name}</h2>
                        <p className="text-sm text-gray-500 capitalize">{room.privacy}</p>
                    </div>
                </div>
                <CustomButton title="Unirse" onSubmit={() => router.push(room.url)}/>
            </div>
        );
    };

    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSideBar />
                <div className="list-container">
                    <h1 className="title"> Lista de Conferencias</h1>
                    {loading ? ( <p>Cargando salas...</p> ) : rooms.length === 0 ? ( <p>No hay salas disponibles.</p>) : (
                        <div className="xl:flex xl:justify-center">
                            <OrderList
                                dataKey="room_name"
                                value={rooms}
                                onChange={(e) => setRooms(e.value)}
                                itemTemplate={roomTemplate}
                                header="Salas Disponibles"
                                dragdrop
                                style={{ width: '100%' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ConferenceList;
