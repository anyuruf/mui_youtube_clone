import React from "react"
import Grid from "@mui/material/Grid"
import VideoCard from "./VideoCard"

export default function VideoGrid({ videos }) {
  // Guard against empty videos array
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p style={{ color: "#aaa" }}>No videos found</p>;
  }
  console.log("From video grid", videos);
  
  return (
    <Grid container size="grow" spacing={2}>
      {videos.map((video, idx) => (
        <Grid video size={{ xs:12, sm:6, md:4, lg:3 }}
          key={idx}
        >
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  )
}
