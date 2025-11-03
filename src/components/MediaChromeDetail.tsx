import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
} from 'media-chrome/react';
import 'youtube-video-element';

function MediaChromeDetail({ videoId }) {
  return (
    <MediaController
      style={{
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* ✅ Use videoid instead of src */}
        <youtube-video
          slot="media"
          src={`https://www.youtube.com/watch?v=${videoId}`}
          crossorigin
          muted
        ></youtube-video>

      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton />
        <MediaSeekForwardButton />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
      </MediaControlBar>
    </MediaController>
  );
}

export default MediaChromeDetail;