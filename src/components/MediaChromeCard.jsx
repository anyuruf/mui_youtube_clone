import {
  MediaController,
} from 'media-chrome/react';
import 'youtube-video-element';

function MediaChromeCard ({ videoId, imgUrl }) {
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
          src={`https://www.youtube.com/watch?v=${videoId}`}
          crossorigin
          playsinline
          muted
        ></youtube-video>
        <media-poster-image
            slot="poster"
            src={imgUrl}>
        </media-poster-image>
    </MediaController>
  );
}

export default MediaChromeCard;