import React, { useState } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/material";

import { VideoGrid, ChannelCard } from "../index";


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  const url1 = `channels?part=snippet&id=${id}`;
  const url2 = `search?channelId=${id}&part=snippet%2Cid&order=date`;


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <VideoGrid videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
