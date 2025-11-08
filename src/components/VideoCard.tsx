import React from "react";
import { Link } from "react-router";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "@/utils/constants";
import { useRef, useEffect, useState} from "react";

function VideoCard({ video }) {
    if (!video || typeof video !== "object") return null;

    const videoId = video.videoId || demoVideoUrl.slice(7);
    const channelId = video.author.channelId || demoChannelUrl.slice(8);
    const channelTitle = video.channel || video?.video?.author?.title;
    const title = video.title || demoVideoTitle;
    const imgUrl = video.thumbnails[0].url || demoVideoUrl;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current === null) return;

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().then();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "350px" },
        boxShadow: 1,
        borderRadius: 0,
      }}
    >
      <CardMedia>
        <Link
          as="video"
          to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
          onMouseEnter={() => setIsVideoPlaying(true)}
          onMouseLeave={() => setIsVideoPlaying(false)}
        >
          <video
            src={videoUrl}
            ref={videoRef}
            poster={imgUrl}
            muted
            playsInline

          />
        </Link>
      </CardMedia>
      <CardContent>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle" gutterBottom component="div">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
