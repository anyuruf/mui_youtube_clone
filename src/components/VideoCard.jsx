import React from 'react'
import { Link } from "react-router"; 
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

function VideoCard  ({ video }) {
   if (!video || typeof video !== 'object') return null;

  const videoId = video.id || video.videoId;
  const channelId = video.channelId || video.author?.channelId;
  const channelTitle = video.channel || video.author?.title;
  const title = video.title || demoVideoTitle;
  const thumbnail = video.thumbnail || demoThumbnailUrl;
  const avatar = video.channelAvatar || video.author?.avatar?.[0]?.url;
  const views = video.views || video.stats?.views;
  const published = video.published || video.publishedTimeText;
  const isVerified =
    video.badges?.some(
      (b) =>
        b.text === "Official Artist Channel" || b.text === "Verified" || b.iconType === "CHECK"
    ) || false;

  return(
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={thumbnail?.high?.url || demoThumbnailUrl} alt={title} 
          sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
  