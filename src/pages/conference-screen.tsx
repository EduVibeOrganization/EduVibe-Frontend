import { useEffect, useState } from 'react';
import { DailyProvider, useCallObject, DailyVideo } from '@daily-co/daily-react';
import { ConferenceService } from '@/services/conference.service';
import { useSearchParams } from 'next/navigation';

function ConferenceScreen() {
    const searchParams = useSearchParams();
    const callObject = useCallObject({});
    const [participants, setParticipants] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [roomName, setRoomName] = useState<string | null>(null);
    const conferenceService = new ConferenceService();

    useEffect(() => {
        const room = searchParams?.get('room');
        if (room) {
            setRoomName(room);
        }
    }, [searchParams]);

    const fetchParticipants = async () => {
        if (!roomName) return;
        const response = await conferenceService.getRoomByNameWithPresence(roomName);
        if (response) {
            setTotalCount(response.total_count);
            setParticipants(response.users.map((user) => user.id));
        } else {
            setTotalCount(0);
        }
    };

    useEffect(() => {
        if (callObject && roomName) {
            const roomUrl = `https://handin.daily.co/${roomName}`;
            
            callObject.join({ url: roomUrl });
            callObject.on('participant-joined', fetchParticipants);
            callObject.on('participant-updated', fetchParticipants);
            callObject.on('participant-left', fetchParticipants);
        }

        return () => {
            callObject?.leave();
            callObject?.off('participant-joined', fetchParticipants);
            callObject?.off('participant-updated', fetchParticipants);
            callObject?.off('participant-left', fetchParticipants);
        };
    }, [callObject, roomName]);

    return (
        <div>
            <h1>{totalCount}</h1>
            <DailyProvider callObject={callObject}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {participants.map((id: string) => (
                        <DailyVideo
                            key={id}
                            sessionId={id}
                            type="video"
                            style={{
                                width: '300px',
                                height: '200px',
                                margin: '10px',
                                borderRadius: '10px',
                                backgroundColor: '#000'
                            }}
                            automirror
                        />
                    ))}
                </div>
            </DailyProvider>
        </div>
    );
}

export default ConferenceScreen;
