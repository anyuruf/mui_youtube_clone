import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, VideoGrid } from ".";
import { BACK_CONTENT } from "@/utils/constants";

export async function clientLoader() {  
   
  const DEFAULT_TOPIC = "advanced spring boot developer";
  const data = await fetchFromAPI(`search?part=snippet&q=${DEFAULT_TOPIC}`);

  console.log("Loader data:", data);

  return data.contents;
};

const FeedPage = ({ loaderData }) => {
  const [selectedCategory, setSelectedCategory] = useState("advanced springboot developer");
  console.log(loaderData);

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
          sx={{ mt: 1.5, color: "#fff" }}
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
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory}{" "}
          <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <VideoGrid videos={BACK_CONTENT} />
      </Box>
    </Stack>
  );
};

export default FeedPage;