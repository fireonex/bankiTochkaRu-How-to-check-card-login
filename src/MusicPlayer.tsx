import React, { useRef } from 'react';

const MusicPlayer = (): JSX.Element => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error: any) => console.error('Error playing the audio', error));
        }
    };

    return (
        <>
            <audio id="background-music" ref={audioRef} src="https://s.muzrecord.com/mp3/2020-10-1/1601564451_morgenshtern_pososi_.mp3" loop>
                Your browser does not support the audio element.
            </audio>
            <button onClick={handlePlay}>Play Music</button>
        </>
    );
};

export default MusicPlayer;