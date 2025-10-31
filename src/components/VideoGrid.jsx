import React from "react"
import VideoCard from "./VideoCard"
import   Stack  from "@mui/material/Stack";

export default function VideoGrid({ videos }) {
  // Guard against empty videos array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p style={{ color: "#aaa" }}>No videos found</p>;
  }
  
  return (
     <Stack direction="row"
      flexWrap="wrap" 
      justifyContent="start" 
      alignItems="start" 
      gap={2}>
      {videos.map((content) => (
        <>
          {/* unwrap video object in {type: "video", video: {}, } */}
          <VideoCard video={content.video} key={content.video.videoId}/>
        </>
      ))}
     </Stack>
  );
};