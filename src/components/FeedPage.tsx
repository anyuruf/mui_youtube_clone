import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import {axiosInstance, fetchFromAPI} from "@/utils/axiosInstance";
import { Sidebar, VideoGrid } from ".";
import { BACK_CONTENT } from "@/utils/constants";
import {useLoaderData} from "react-router";

export async function clientLoader () {
    const {contents} = await axiosInstance.get(`search?q=${selectedCategory}&hl=en&gl=US`)
                                .catch(function (error) {
                                    if (error.response) {
                                        // The request was made and the server responded with a status code
                                        // that falls out of the range of 2xx
                                        console.log(error.response.data);
                                        console.log(error.response.status);
                                        console.log(error.response.headers);
                                        return BACK_CONTENT;
                                    } else if (error.request) {
                                        // The request was made but no response was received
                                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                        // http.ClientRequest in node.js
                                        console.log(error.request);
                                        return BACK_CONTENT;
                                    } else {
                                        // Something happened in setting up the request that triggered an Error
                                        console.log('Error', error.message);
                                        return BACK_CONTENT;
                                    }
                                });
    console.log(contents);
    return { data : contents} ;

}

const FeedPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Advanced Spring Boot Developer");
  const videos = useLoaderData();


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