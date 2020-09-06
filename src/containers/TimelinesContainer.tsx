import React from "react";
import { MediaCard } from "../components/MediaCard";
import { useTimelinesController } from "./TimelinesController";
import { ViewMoreButton } from "../components/ViewMoreButton";
import { AdBanner } from "../components/AdBanner";

export const TimelinesContainer: React.FC = () => {
  const { timelines, loading, viewMore } = useTimelinesController();

  return (
    <React.Fragment>
      {timelines.map((timeline, i) => (
        <React.Fragment key={i}>
          <MediaCard
            type={timeline.type}
            images={timeline.images}
            text={timeline.text}
            video={timeline.video}
          ></MediaCard>
          {(i + 1) % 5 === 0 && (
            <AdBanner
              text="광고"
              type="image"
              src="https://pbs.twimg.com/profile_images/1262597503964200960/Jtn-7ZnG_400x400.jpg"
              link="https://www.naver.com"
            ></AdBanner>
          )}
        </React.Fragment>
      ))}

      {loading && "loading..."}

      <ViewMoreButton onClick={viewMore}>더보기</ViewMoreButton>
    </React.Fragment>
  );
};
