import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { Video } from "./Video";

const Container = styled.div`
  border-radius: 6px;
  margin-bottom: 32px;
  border-radius: 6px;
  border: #dedede 1px solid;
  padding: 16px;
  display: flex;
`;

const ThumbnailArea = styled.div`
  width: 122px;
`;

const TextArea = styled.div`
  margin-left: 16px;
`;

const Tumbnail = styled.img`
  width: 100%;
`;

interface Props {
  type?: "image" | "video";
  text?: string;
  src?: string;
  link?: string;
}

export const AdBanner = React.memo<Props>(({ type, text, src, link }) => {
  const [firstInView, setFirstInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setFirstInView(true);
    }
  }, [inView, firstInView]);

  useEffect(() => {
    console.log("tracking");
  }, [firstInView]);

  return (
    <Container ref={ref}>
      <ThumbnailArea>
        {type === "image" && src && <Tumbnail src={src} alt=""></Tumbnail>}
        {type === "video" && src && <Video url={src} playing={inView}></Video>}
      </ThumbnailArea>
      <TextArea>
        <p>{text}</p>
        {link && (
          <a href={link} target="_blank">
            이동하기
          </a>
        )}
      </TextArea>
    </Container>
  );
});
