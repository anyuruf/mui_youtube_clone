import { useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {Sidebar, VideoGrid} from ".";


interface FeedPageProps {
  videos: Array<{ type: string; video: any }>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FeedPage = ({videos, selectedCategory, setSelectedCategory}: FeedPageProps) => {

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

        <VideoGrid videos={videos} />
      </Box>
    </Stack>
  );
};

export default FeedPage;