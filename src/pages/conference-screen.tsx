import { useEffect, useState } from 'react';
import { useScreenShare, DailyProvider, useCallObject, DailyVideo, useLocalSessionId } from '@daily-co/daily-react';
import { ConferenceService } from '@/services/conference.service';
import { useSearchParams } from 'next/navigation';
import { CustomButtonDX } from '@/components/custom-button-dx.component';

import "../app/assets/styles/public.css";
import "../app/assets/styles/conference-screen.css";
import router from 'next/router';

function ConferenceScreen() {
    const localSessionId = useLocalSessionId();
    const searchParams = useSearchParams();
    const callObject = useCallObject({});
    const [participants, setParticipants] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [roomName, setRoomName] = useState<string | null>(null);
    const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
    const [isMicOn, setIsMicOn] = useState<boolean>(true);
    const [isScreenSharing, setIsScreenSharing] = useState<boolean>(false);
    const conferenceService = new ConferenceService();
    const [screenShareId, setScreenShareId] = useState<string | null>(null);
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

    const toggleCamera = () => {
        if (callObject) {
            callObject.setLocalVideo(!isCameraOn);
            setIsCameraOn((prev) => !prev);
        }
    };

    const toggleMic = () => {
        if (callObject) {
            callObject.setLocalAudio(!isMicOn);
            setIsMicOn((prev) => !prev);
        }
    };

    const toggleScreenShare = () => {
        if (!callObject) return;
        if(isScreenSharing){
            setScreenShareId(null);
            callObject.stopScreenShare(); 
        } else {
            setScreenShareId(localSessionId);
            callObject.startScreenShare();
        }
    };

    const leaveRoom = () => {
        if (callObject) {
            callObject.leave();
            callObject.destroy();
        }
        router.push('/sign-in');
    };

    useEffect(() => {
        if (callObject && roomName) {
            const roomUrl = `https://handin.daily.co/${roomName}`;
            
            callObject.join({ url: roomUrl });
            callObject.on('participant-joined', fetchParticipants);
            callObject.on('participant-updated', fetchParticipants);
            callObject.on('participant-left', fetchParticipants);

            callObject.on('participant-updated', () => {
                const state = useScreenShare();
                setScreenShareId(state.screens[0]?.session_id);
                fetchParticipants();
            });

            callObject.on('local-screen-share-started', () => {
                setScreenShareId(localSessionId);
                setIsScreenSharing(true);
                alert('Compartiendo pantalla');
            });

            callObject.on('local-screen-share-stopped', () => {
                setScreenShareId(null);
                setIsScreenSharing(false);
                alert('Dejó de compartir pantalla');
            });
        }

        return () => {
            callObject?.leave();
            callObject?.off('participant-joined', fetchParticipants);
            callObject?.off('participant-updated', fetchParticipants);
            callObject?.off('participant-left', fetchParticipants);
        };
    }, [callObject, roomName]);

    return (
        <div className='content-background'>
            <div className='content'>
                <div className='content-header'>
                <img src="/images/logo2.png" alt="Handin Logo" className="h-8 w-auto"/>
                    <h1>Participantes en la sala: {totalCount}</h1>
                </div>
                <div className='content-screen'>
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
                            { screenShareId != null && isScreenSharing && (
                                <DailyVideo
                                    key={screenShareId}
                                    sessionId={screenShareId}
                                    type="screenVideo"
                                    style={{
                                        width: '640px',
                                        height: '360px',
                                        margin: '10px',
                                        borderRadius: '10px',
                                        border: '2px solid #f97316',
                                        backgroundColor: '#000'
                                    }}
                                />
                            )}
                        </div>
                    </DailyProvider>
                </div>
                <div className='content-footer'>
                    <CustomButtonDX 
                        title={isCameraOn ? 'Apagar la Cámara' : 'Encender la Cámara'}
                        icon='pi pi-video'
                        iconPosition='top'
                        color={isCameraOn ? '#06b6d4' : "#929292"}
                        size='small'
                        onSubmit={toggleCamera}
                    />
                    <CustomButtonDX 
                        title={isMicOn ? 'Apagar el Micrófono' : 'Encender el Micrófono'}
                        icon='pi pi-microphone'
                        iconPosition='top'
                        color={isMicOn ? '#06b6d4' : "#929292"}
                        size='small'
                        onSubmit={toggleMic}
                    />
                    <CustomButtonDX 
                        title={isScreenSharing ? 'Detener Compartir Pantalla' : 'Compartir Pantalla'}
                        icon='pi pi-desktop'
                        iconPosition='top'
                        color={isScreenSharing ? '#f97316' : '#06b6d4'}
                        size='small'
                        onSubmit={toggleScreenShare}
                    />
                    <CustomButtonDX 
                        title={'Salir'}
                        icon='pi pi-sign-out'
                        iconPosition='right'
                        color={'red'}
                        size='small'
                        onSubmit={leaveRoom}
                    />
                </div>
            </div>
        </div>
    );
}

export default ConferenceScreen;
