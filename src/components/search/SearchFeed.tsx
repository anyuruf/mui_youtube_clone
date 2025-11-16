import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router";

import { VideoGrid } from "../index";

const SearchFeed = ({videos, searchTerm}) => {
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="caption" mb={3} ml={{ sm: "100px"}}>
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
