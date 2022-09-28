import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { windDegSelector, windGustSelector, windSpeedSelector } from "../../../redux/openWeatherReducer";
import "./wind.css";
import {
  WindDirection,
  WindDirectionArrow,
  WindDirectionCompass,
  WindDirectionInfoContainer,
} from "./windDirectionInfoStyled";

const WindDirectionInfo: React.FC = () => {
    const windSpeed = useAppSelector(windSpeedSelector);
    const windDeg = useAppSelector(windDegSelector);
    const windGust = useAppSelector(windGustSelector);
  return (
    <WindDirectionInfoContainer>
      <WindDirectionCompass>
        <WindDirection>
          <p>
            gust: {windGust ? windGust : "0"} km/h
            <span>wind: {windSpeed} km/h</span>
          </p>
        </WindDirection>
        <WindDirectionArrow windDeg={windDeg} />
      </WindDirectionCompass>
    </WindDirectionInfoContainer>
  );
};

export default React.memo(WindDirectionInfo);
