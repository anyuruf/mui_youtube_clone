import {
  MediaController,
} from 'media-chrome/react';
import {  } from 'media-chrome/react/media-store';
import 'youtube-video-element';
import { Image } from "@unpic/react";

function MediaChromeCard ({ videoId, imgUrl }, videoRef) {
   
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
          <Image
              src={imgUrl}>
          </Image>
    </MediaController>
  );
}

export default MediaChromeCard;