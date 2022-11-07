import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return "Loading..." ;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item} />}
{/* {        console.log(item.id.channelId)
} */}
        </Box>
      ))}
      

      
    </Stack>
  );
}

export default Videos;