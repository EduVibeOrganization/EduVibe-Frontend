import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function ConferenceScreenSimplified() {
    const searchParams = useSearchParams();
    const roomName = searchParams?.get('room');

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {roomName && (
                <iframe
                    src={`https://handin.daily.co/${roomName}`}
                    allow="camera; microphone; fullscreen; display-capture"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                />
            )}
        </div>
    );
}

export default ConferenceScreenSimplified;
