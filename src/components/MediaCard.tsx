import React from "react";
import { Card, CardCoverArea, CardThumbnailImage, CardText } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Video } from "./Video";
import { useInView } from "react-intersection-observer";

interface Props {
  type?: "images" | "video";
  text?: string;
  images?: string[];
  video?: string;
}

export const MediaCard = React.memo<Props>(({ type, text, images, video }) => {
  const [ref, inView] = useInView();

  return (
    <Card>
      {type === "images" && images && (
        <CardCoverArea>
          <Swiper navigation pagination>
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <CardThumbnailImage src={image}></CardThumbnailImage>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardCoverArea>
      )}

      {type === "video" && video && (
        <CardCoverArea ref={ref}>
          <Video url={video} playing={inView}></Video>
        </CardCoverArea>
      )}
      {text && <CardText>{text}</CardText>}
    </Card>
  );
});
