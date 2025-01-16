import { useEffect, useState } from 'react';
import { DailyProvider, useCallObject, DailyVideo, useLocalSessionId } from '@daily-co/daily-react';
import { ConferenceService } from '@/services/conference.service';
import { useSearchParams } from 'next/navigation'

function ConferenceScreen() {
    const searchParams = useSearchParams();
    const callObject = useCallObject({});
    const [participants, setParticipants] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const roomName =  searchParams?.get('room') as string;
    const roomUrl = `https://handin.daily.co/${roomName}`;
    const conferenceService = new ConferenceService();

    const fetchParticipants = async () => {
        const response = await conferenceService.getRoomByNameWithPresence(roomName);
        if (response) {
            setTotalCount(response.total_count);
            setParticipants(response.users.map((user) => user.id));
        } else setTotalCount(0);
    };

    useEffect(() => {
        if (callObject) {
            callObject.join({ url: roomUrl });
            callObject.on('participant-joined', fetchParticipants);
            callObject.on('participant-updated', fetchParticipants);
            callObject.on('participant-left', fetchParticipants);
        }

        fetchParticipants();

        return () => {
            callObject?.leave();
            callObject?.off('participant-joined', fetchParticipants);
            callObject?.off('participant-updated', fetchParticipants);
            callObject?.off('participant-left', fetchParticipants);
        };
    }, [callObject]);

    return (
        <div>
            <h1>{totalCount}</h1>
            <DailyProvider callObject={callObject}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {Object.values(participants).map((id: string) =>
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
                    )}
                </div>
            </DailyProvider>
        </div>
    );
}

export default ConferenceScreen;