import React from 'react';
// import './mainInfo.css';
import { MainInfoContainer } from './mainInfoStyled';
import { useSelector } from 'react-redux';
import { ICON_URL } from './../../api/api';

function MainInfo({ isScrolled, background }) {
  const { city_name } = useSelector(state => state.openWeather);
  const { temp_now, temp_min, temp_max } = useSelector(state => state.openWeather.main);
  const description = useSelector(state => state.openWeather.weather.description);

  const backgroundImg = `${ICON_URL}${background}@2x.png`;
  return (
    <>
      <MainInfoContainer isScrolled={isScrolled} backgroundImg={backgroundImg}>
        <span className='info_city'>{city_name}</span>
        <span className='info_temp'>{temp_now} <span className='celsius'></span></span>
        <span className='info_weather'>
          {isScrolled ? `${temp_now}° ${description}` : `${description}`}
        </span>
        <span className='info_hl'>H:{temp_max}<span className='celsius'></span>&nbsp;&nbsp;L:{temp_min}<span className='celsius'></span></span>
      </MainInfoContainer>
    </>
  );
}

export default MainInfo;