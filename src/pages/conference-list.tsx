import { CustomButton } from "@/components/custom-button.component";
import { RoomResponseDTO } from "@/models/room-response.dto";
import { ConferenceService } from "@/services/conference.service";
import { useRouter } from "next/navigation";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useEffect, useState } from "react";

function ConferenceList() {
    const router = useRouter();

    const [rooms, setRooms] = useState<Array<RoomResponseDTO>>([]);
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
    }

    useEffect(() => { getAllRooms();}, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Lista de Conferencias</h1>
            {loading ? ( <p>Cargando salas...</p>) : rooms.length === 0 ? ( <p>No hay salas disponibles.</p>) : (
                <ul className="space-y-4">
                    {rooms.map((room, index) => (
                        <li key={index} className="p-4 border rounded-md shadow-md bg-white flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{room.room_name}</h2>
                                <p className="text-sm text-gray-500">Privacidad: {room.privacy}</p>
                            </div>
                            <CustomButton title={"Unirse"} onSubmit={() => router.push(room.url)}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ConferenceList;