import { useEffect, useState } from 'react';
import { useScreenShare, DailyProvider, useCallObject, DailyVideo, useLocalSessionId } from '@daily-co/daily-react';
import { ConferenceService } from '@/services/conference.service';
import { useSearchParams } from 'next/navigation';
import { CustomButtonDX } from '@/components/custom-button-dx.component';

import "../app/assets/styles/public.css";
import "../app/assets/styles/conference-screen.css";
import router from 'next/router';

function ConferenceScreen() {
    //Configuration
    const searchParams = useSearchParams();
    const callObject = useCallObject({});
    const screenShareState = useScreenShare();
    const conferenceService = new ConferenceService();
    
    //Room info
    const [roomName, setRoomName] = useState<string | null>(null);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [participantsSharingScreens, setParticipantsSharingScreens] = useState<string[]>([]);

    //Participants of the room
    const [participants, setParticipants] = useState<string[]>([]);
    
    //Conference controls
    const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
    const [isMicOn, setIsMicOn] = useState<boolean>(true);
    const [isScreenSharing, setIsScreenSharing] = useState<boolean>(false);
    
    {/* Room Creation */}
    /*
        When the page is created, it fetches the name of the room
        Having the name before anything else important because we need
        it to join the room
    */
    useEffect(() => {
        const room = searchParams?.get('room');
        if (room) {
            setRoomName(room);
        }
    }, [searchParams]);


    //Fetches the participants using the room service
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

    /* 
        The name obtained is used to create the url.
        The other functions are used to handle the events of the callObject
        Every time a participants enters or leaves the room, fetchParticipants is called
    */
    useEffect(() => {
        if (callObject && roomName) {
            
            const roomUrl = `https://handin.daily.co/${roomName}`;
            
            callObject.join({ url: roomUrl });
            callObject.on('participant-joined', fetchParticipants);
            callObject.on('participant-updated', fetchParticipants);
            callObject.on('participant-left', fetchParticipants);

            callObject.on('local-screen-share-started', () => {
                setIsScreenSharing(true);
            });

            callObject.on('local-screen-share-stopped', () => {
                setIsScreenSharing(false);
            });
        }

        return () => {
            callObject?.leave();
            callObject?.off('participant-joined', fetchParticipants);
            callObject?.off('participant-updated', fetchParticipants);
            callObject?.off('participant-left', fetchParticipants);
        };
    }, [callObject, roomName]);

    {/* Room Deletion */}
    /*
        This useEffect is used to handle the event of the user leaving the room
        It is used to prevent the user to enter twice to the room
     */
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [callObject]);

    //Destroys the call object and removes the user from the room
    const handleBeforeUnload = () => {
        if (callObject) {
            callObject.leave();
            callObject.destroy();
        }
    };

    const leaveRoom = () => {
        handleBeforeUnload
        router.push('/conference-left');
    };

    {/* Conference controls */}
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
        if(callObject) {
            if (!isScreenSharing) {
                callObject.startScreenShare();
            } else {
                callObject.stopScreenShare();
            }
        }
    };

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
                            {participantsSharingScreens.map((id: string) => (
                                <DailyVideo
                                    key={id}
                                    sessionId={id}
                                    type="screenVideo"
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
                    <CustomButtonDX 
                        title={'Participantes compartiendo pantalla'}
                        icon='pi pi-users'
                        iconPosition='right'
                        color={'green'}
                        size='small'
                        onSubmit={() => {console.log(participantsSharingScreens)}}
                    />
                </div>
            </div>
        </div>
    );
}

export default ConferenceScreen;
