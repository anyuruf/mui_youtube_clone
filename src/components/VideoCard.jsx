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
    
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 2,
  bgcolor: "#1E1E1E", }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
    <Box sx={{ position: "relative" }}>
          <CardMedia
            image={thumbnail}
            alt={title}
            sx={{
              width: { xs: "100%", sm: "358px" },
              height: 180,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          {video.duration && (
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                bgcolor: "rgba(0,0,0,0.75)",
                color: "#fff",
                fontSize: "0.7rem",
                px: 0.75,
                py: 0.25,
                borderRadius: 0.75,
              }}
            >
              {formatDuration(video.duration)}
            </Box>
          )}
        </Box>
      </Link>

      {/* Content */}
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        {/* Title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* Channel */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
          <Avatar
            src={avatar}
            alt={channelTitle}
            sx={{ width: 28, height: 28 }}
          />
          <Link
            to={channelId ? `/channel/${channelId}` : demoChannelUrl}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle2" color="gray" display="flex" alignItems="center">
              {channelTitle || demoChannelTitle}
              {isVerified && (
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              )}
            </Typography>
          </Link>
        </Box>

        {/* Views + Published */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 0.5,
            color: "gray",
            fontSize: "0.75rem",
          }}
        >
          {views && (
            <>
              <VisibilityIcon sx={{ fontSize: "14px" }} />
              <span>{formatViews(views)}</span>
            </>
          )}
          {published && (
            <>
              <span>•</span>
              <span>{published}</span>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

// --- helpers ---
function formatViews(v) {
  if (!v) return "—";
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(1) + "M views";
  if (v >= 1_000) return (v / 1_000).toFixed(1) + "K views";
  return v + " views";
}

function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default VideoCard;
  