import { Link } from "react-router";
import  Box from "@mui/material/Box";
import { Image } from "@unpic/react";
import { formatDuration } from '@/utils/formatDuration';
import  Typography  from "@mui/material/Typography";
import  Avatar  from "@mui/material/Avatar";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "@/utils/constants";
import type { VideoType } from "@/types/api";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: 'compact',
});

function VideoCard({ video } : VideoType) {
    if (!video || typeof video !== "object") return null;

    const videoId = video.videoId || demoVideoUrl.slice(7);
    const channelId = video.author.channelId || demoChannelUrl.slice(8);
    const channelTitle = video.author.title || demoChannelTitle;
    const channelProfileUrl = video.author.avatar['url'] || demoChannelUrl;
    const title = video.title || demoVideoTitle;
    const imgUrl = video.thumbnails[0].url || demoVideoUrl;
    const views = video.stats.views;
    const duration = video.lengthSeconds;
    const postedAt = video.publishedTimeText;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?controls=1`;

    return (
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gap: 2,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    overflow: "hidden",
                    transition: "background 0.5s ease",
                    zIndex:35,
                    "&:hover": {
                        background: "linear-gradient(35deg, hsla(0, 100%, 45%, 0.35), hsla(53, 100%, 50%, 0.35))",
                        zIndex: 35,
                        border: "10px solid",
                        borderImageSlice: 1,
                        borderWidth: "8px",
                        borderImageSource: "linear-gradient(85deg, hsla(0, 100%, 45%, 0.35), hsla(53, 100%, 50%," +
                            " 0.35))",
                    },
                }}
            >
                <Link
                    to={`/watch?v=${videoId}`}
                    style={{
                        position: "relative",
                        aspectRatio: "16/9",
                        width: "100%",
                        borderTopLeftRadius: 1,
                        borderTopRightRadius: 1,
                        overflow: "hidden",
                        transition: "border-radius 0.2s ease",
                        display: "block",

                    }}>
                    {/* --- Thumbnail Image --- */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "block",
                        }}
                    >
                        <Image
                            src={imgUrl}
                            alt={title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",

                            }}
                        />
                        {/* Duration Label */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 4,
                                right: 4,
                                bgcolor: "hsla(28, 100%, 35%, 0.88)",
                                color: "white",
                                fontSize: "0.75rem",
                                px: 0.5,
                                borderRadius: 0.5,
                            }}
                        >
                            {formatDuration(duration)}
                        </Box>
                        {/* delay-350, wait until the border of the <img> to be unrounded first before playing the video. */}
                        {/* --- Video Preview --- */}
                    </Box>
                </Link>
                {/* --- Channel and Text --- */}
                <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Avatar
                        src={channelProfileUrl}
                        alt={channelTitle}
                        sx={{ width: 48, height: 48 }}
                        component={Link}
                        to={`/@${channelId}`}
                    />
                    <Box sx={{ display: "grid", gridTemplateRows: "subGrid", gap: 0.35 }}>
                        <Typography
                            component={Link}
                            to={`/watch?v=${videoId}`}
                            variant="subtitle1"
                            fontWeight="500"
                            color="text.primary"
                            sx={{ textDecoration: "none", lineHeight: "normal" }}
                        >
                            {(title < 65)? title:
                                <abbr
                                    style={{ textDecoration: "none" }}
                                    title={title}>
                                    {title.slice(0, 65) + " ..."}
                                </abbr>}


                        </Typography>
                        <Typography
                            component={Link}
                            to={`/@${channelId}`}
                            variant="body2"
                            color="text.secondary"
                            sx={{ textDecoration: "none" }}
                        >
                            {channelTitle}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ background: "linear-gradient(to right, hsla(0, 100%, 35%, 1), hsla(92, 100%," +
                                    " 50%," +
                                    " 0.96))",
                            webkitBackgroundClip: "text",
                            backgroundClip: "text",
                          }}>
                            {VIEW_FORMATTER.format(views)} views  ] [  {postedAt}
                        </Typography>
                    </Box>
                </Box>
            </Box>
    );
}

export default VideoCard;
