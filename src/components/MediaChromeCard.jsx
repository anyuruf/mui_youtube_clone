import {
  MediaController,
} from 'media-chrome/react';
import 'youtube-video-element';
import { useEffect, useRef, useState } from 'react';

function MediaChromeCard ({ videoId, imgUrl }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <MediaController
      style={{
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* ✅ Use videoid instead of src */}
        <youtube-video
          slot="media"
          ref={videoRef}
          src={`https://www.youtube.com/watch?v=${videoId}`}
          crossorigin
          playsinline
          muted
        ></youtube-video>
        <media-poster-image
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
            src={imgUrl}>
        </media-poster-image>
    </MediaController>
  );
}

export default MediaChromeCard;