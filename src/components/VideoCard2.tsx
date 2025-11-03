import { formatDuration } from '../utils/formatDuration.ts';
import { formatTimeAgo } from '../utils/formatTimeAgo.ts';
import { useEffect, useRef, useState } from 'react';

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: 'compact',
});

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}) => {
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

  /* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
    playsinline - A Boolean attribute indicating that the video is to be played "inline",
    that is within the element's playback area. Note that the absence of this attribute does not imply
    that the video will always be played in fullscreen.
  */
  return (
    <div
      className='flex flex-col gap-2'
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className='relative aspect-video'>
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? 'rounded-none' : 'rounded-xl'
          }`}
        />
        <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded'>
          {formatDuration(duration)}
        </div>
        {/* delay-200, wait until the border of the <img> to be unrounded first before playing the video. */}
        <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        ></video>
      </a>
      <div className='flex gap-2'>
        <a href={`/@${channel.id}`} className='flex-shrink-0'>
          <img className='w-12 h-12 rounded-full' src={channel.profileUrl} />
        </a>
        <div className='flex flex-col'>
          <a href={`/watch?v=${id}`} className='font-bold'>
            {title}
          </a>
          <a href={`/@${channel.id}`} className='text-secondary-text text-sm'>
            {channel.name}
          </a>
          <div className='text-secondary-text text-sm'>
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
