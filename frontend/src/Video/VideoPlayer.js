import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoNodeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = videojs(videoNodeRef.current, {
      techOrder: ['html5'],
      sources: [
        {
          src: videoUrl,
          type: 'application/x-mpegURL',
        },
      ],
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
      console.log(videoUrl);
    };
  }, [videoUrl]);

  return (
    <div data-vjs-player>
      <video ref={videoNodeRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;
