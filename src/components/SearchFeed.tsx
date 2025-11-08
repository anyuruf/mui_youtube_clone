import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router";

import { VideoGrid } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  const url = `search?part=snippet&q=${searchTerm}`



  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<VideoGrid videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
