import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/axiosInstance";
import { Sidebar, VideoGrid } from ".";
import { BACK_CONTENT } from "@/utils/constants";

const FeedPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("advanced springboot developer");
  const [videos, setVideos] = useState(null);
  const videosProxy = videos??BACK_CONTENT;

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.contents);
      })
    }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          variant="body2"
          sx={{ mt: 1.5}}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      {/* Videos */}
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          mb={2}
        >
          {selectedCategory}{" "}
          <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <VideoGrid videos={videosProxy} />
      </Box>
    </Stack>
  );
};

export default FeedPage;