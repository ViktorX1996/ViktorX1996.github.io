import React from "react";
import { ReusableCardContainer } from "../ReusableCard/reusableCardStyled";
import { CardsConfig, cardsConfig } from "../../constants/cardsConfig";
import ReusableCard from "../ReusableCard/ReusableCard";
import CurrentWeatherInfo from "../ReusableCardItems/CurrentWeatherInfo/CurrentWeatherInfo";
import MultipleDayInfo from '../ReusableCardItems/MultipleDayInfo/MultipleDayInfo';
import AirQualityInfo from '../ReusableCardItems/AirQualityInfo/AirQualityInfo';
import WindMapInfo from '../ReusableCardItems/WindMapInfo/WindMapInfo';
import UvIndexInfo from '../ReusableCardItems/UvIndexInfo/UvIndexInfo';
import SunriseInfo from '../ReusableCardItems/SunriseInfo/SunriseInfo';
import WindDirectionInfo from '../ReusableCardItems/WindDirectionInfo/WindDirectionInfo';
import PressureInfo from '../ReusableCardItems/PressureInfo/PressureInfo';
import FeelsLikeInfo from '../ReusableCardItems/FeelsLikeInfo/FeelsLikeInfo';
import HumidityInfo from '../ReusableCardItems/HumidityInfo/HumidityInfo';


interface TContentSwitcherProps {
  content: string;
}

const ContentSwitcher: React.FC<TContentSwitcherProps> = ({ content }) => {
  switch (content) {
    case CardsConfig.CURRENT_WEATHER_INFO: return <CurrentWeatherInfo />;
    case CardsConfig.MULTIPLE_DAY_INFO: return <MultipleDayInfo />;
    case CardsConfig.AIR_QUALITY_INFO: return <AirQualityInfo />;
    case CardsConfig.WIND_MAP_INFO: return <WindMapInfo />
    case CardsConfig.UV_INDEX_INFO: return <UvIndexInfo />
    case CardsConfig.SUNRISE_INFO: return <SunriseInfo />
    case CardsConfig.WIND_DIRECTION_INFO: return <WindDirectionInfo />
    case CardsConfig.PRESSURE_INFO: return <PressureInfo />
    case CardsConfig.FEELS_LIKE_INFO: return <FeelsLikeInfo />
    case CardsConfig.HUMIDITY_INFO: return <HumidityInfo />
    default: return <span>Error</span>
  }
};

const CardMapper: React.FC = () => {
  return (
    <>
      {cardsConfig.map((card) => (
        <ReusableCardContainer isTwoBlocks={card.isTwoBlocks} key={card.id}>
          <ReusableCard
            {...card} // multiple props {title, limit, isImg, isTwoBlocks, content}
            title={card.title[0]}
          >
            <ContentSwitcher key={card.content[0]} content={card.content[0]} />
            {/* {card.content[0]} */}
          </ReusableCard>
          {card.isTwoBlocks && (
            <ReusableCard {...card} title={card.title[1]}>
              <ContentSwitcher key={card.content[1]} content={card.content[1]} />
            </ReusableCard>
          )}
        </ReusableCardContainer>
      ))}
    </>
  );
};
// export default CardMapper;
export default React.memo(CardMapper);
