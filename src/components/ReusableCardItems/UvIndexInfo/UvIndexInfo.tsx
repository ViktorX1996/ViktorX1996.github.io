import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { uviSelector, uviMaxSelector } from "../../../redux/openWeatherReducer";

const UvIndexInfo: React.FC = () => {
  const uvi = useAppSelector(uviSelector);
  const uvi_max = useAppSelector(uviMaxSelector);
  return (
    <>
      <span className="medium_text">UV: {uvi}</span>
      <p className="small_text">Max today's uv: {uvi_max}</p>
    </>
  );
};

export default React.memo(UvIndexInfo);

