import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

//   if (isPlaying) {
//     ref.current.play();  // Calling these while rendering isn't allowed.
//   } else {
//     ref.current.pause(); // Also, this crashes.
//   }
    // 
    // useEffect(() => {
    //     if (isPlaying) {
    //     ref.current.play();
    //     } else {
    //     ref.current.pause();
    //     }
    // },);
    //  Lint Error - React Hook useEffect has a missing 
    // useEffect(() => {
    //     if (isPlaying) {
    //     ref.current.play();
    //     } else {
    //     ref.current.pause();
    //     }
    // },[]);
    useEffect(() => {
        if (isPlaying) {
        ref.current.play();
        } else {
        ref.current.pause();
        }
    },[isPlaying]);
  return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
