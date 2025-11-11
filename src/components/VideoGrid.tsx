import React from "react"
import VideoCard from "./VideoCard"
import   Box  from "@mui/material/Box";

export default function VideoGrid({ videos }) {
  // Guard against empty videos array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p style={{ color: "#aaa" }}>No videos found</p>;
  }
  
  return (
      <Box
          sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(335px, 100%), 1fr))',
              gap: 2,
          }}
      >
      {videos.map((content) => (
        <>
          {/* unwrap video object in {type: "video", video: {}, } */}
          <VideoCard video={content.video} key={content.video.videoId}/>
        </>
      ))}
     </Box>
  );
};