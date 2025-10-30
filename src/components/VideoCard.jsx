import React from 'react'
import { Link } from "react-router"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

function VideoCard  ({ video }) {
   if (!video || typeof video !== 'object') return null;

  const videoId = video.video.videoId || demoVideoUrl.slice(7);
  const channelId =  video.video.author.channelId || demoChannelUrl.slice(8);
  const channelTitle = video.video.channel || video?.video?.author?.title;
  const title = video.video.title || demoVideoTitle;
  const imgUrl = video.video.thumbnails[0].url || demoVideoUrl;

  return(
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia src={imgUrl} />
      </Link>
      <CardContent>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
          <Typography variant="h5" gutterBottom component="div">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
  