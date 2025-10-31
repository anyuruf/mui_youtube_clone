import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { VideoGrid, Loader } from "./";
import { axiosInstance } from "../utils/axiosInstance";
import MediaChromeDetail from "./MediaChromeDetail";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const url1 = `videos?part=snippet,statistics&id=${id}`;
  const url2 = `search?part=snippet&relatedToVideoId=${id}&type=video`;

  useEffect(() => {
    axiosInstance({url: {url1} })
      .then((data) => setVideoDetail(data.items[0]))

    axiosInstance({url2})
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <MediaChromeDetail videoId={id} />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <VideoGrid videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
