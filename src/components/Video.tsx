import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface Props {
  url: string;
  playing?: boolean;
}

export const Video = React.memo<Props>(({ url, playing }) => {
  return (
    <ReactPlayer
      url={url}
      wrapper={VideoContainer}
      playing={playing}
      width="100%"
      height="100%"
    ></ReactPlayer>
  );
});

const VideoContainer = styled.div`
  iframe,
  video {
    border-radius: 6px;
  }
`;
