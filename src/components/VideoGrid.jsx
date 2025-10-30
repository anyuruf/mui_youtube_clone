import React from "react"
import VideoCard from "./VideoCard"
import   Stack  from "@mui/material/Stack";

export default function VideoGrid({ videos }) {
  // Guard against empty videos array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p style={{ color: "#aaa" }}>No videos found</p>;
  }
  console.log("From video grid", videos);
  
  return (
     <Stack direction="row"
      flexWrap="wrap" 
      justifyContent="start" 
      alignItems="start" 
      gap={2}>
      {videos.map((video) => (
         <VideoCard video={video}/>
      ))}
     </Stack>
  );
};