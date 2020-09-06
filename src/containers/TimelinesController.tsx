import { TIMELINES, Timeline } from "../mocks/timelines";
import { useState, useEffect, useCallback } from "react";

export const useTimelinesController = () => {
  const [loading, setLoading] = useState(true);
  const [timelines, setTimelines] = useState<Timeline[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTimelines(TIMELINES);
      setLoading(false);
    }, 2000);
  }, [setLoading, setTimelines]);

  const viewMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setTimelines((v) => v.concat(TIMELINES));
      setLoading(false);
    }, 2000);
  }, [setLoading, setTimelines]);

  return {
    loading,
    timelines,
    viewMore,
  };
};
