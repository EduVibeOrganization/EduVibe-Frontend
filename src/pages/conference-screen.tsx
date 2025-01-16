import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DailyProvider, useCallObject, DailyVideo } from '@daily-co/daily-react';
import { ConferenceService } from '@/services/conference.service';
function ConferenceScreen() {
    const router = useRouter();
    const callObject = useCallObject({});
    const [participants, setParticipants] = useState({});
    const [remoteUsers, setRemoteUsers] = useState<string[]>([]);
    const roomName = router.query.room as string;
    const roomUrl = `https://handin.daily.co/${roomName}`;
    const conferenceService = new ConferenceService();

    const handleParticipantsUpdate = () => {
        if (callObject) {
            setParticipants(callObject.participants());
            console.log(participants);
        }
    };

    const fetchRemoteParticipants = async () => {
        const response = await conferenceService.getRoomByNameWithPresence(roomName);
        if (response && response.users) {
            setRemoteUsers(response.users.map(user => user.id));
        }
    };

    useEffect(() => {
        if (callObject) {
            callObject.join({ url: roomUrl });
            callObject.on('participant-joined', handleParticipantsUpdate);
            callObject.on('participant-updated', handleParticipantsUpdate);
            callObject.on('participant-left', handleParticipantsUpdate);
        }

        fetchRemoteParticipants();

        return () => {
            callObject?.leave();
            callObject?.off('participant-joined', handleParticipantsUpdate);
            callObject?.off('participant-updated', handleParticipantsUpdate);
            callObject?.off('participant-left', handleParticipantsUpdate);
        };
    }, [callObject]);

    return (
        <div>
            <DailyProvider callObject={callObject}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {Object.values(participants).map((participant) =>
                        remoteUsers.includes(participant.user_id) && participant.video && (
                            <DailyVideo
                                key={participant.session_id}
                                sessionId={participant.session_id}
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
                        )
                    )}
                </div>
            </DailyProvider>
        </div>
    );
}

export default ConferenceScreen;
