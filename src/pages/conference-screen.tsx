import { useEffect } from 'react';
import { DailyProvider, useCallObject, DailyVideo } from '@daily-co/daily-react';

function ConferenceScreen() {
    const callObject = useCallObject({});
    const roomUrl = "https://handin.daily.co/Prueba";

    useEffect(() => {
        if (callObject) {
            callObject.join({ url: roomUrl });
        }
        return () => {
            callObject?.leave();
        };
    }, [callObject]);

    return (
        <DailyProvider callObject={callObject}>
            <DailyVideo
                style={{ width: '100vw', height: '100vh' }}
                automirror sessionId={'801b5684-05e5-49f5-a8a9-048674374ae5'} type={'video'}
            />
        </DailyProvider>
    );
}

export default ConferenceScreen;
