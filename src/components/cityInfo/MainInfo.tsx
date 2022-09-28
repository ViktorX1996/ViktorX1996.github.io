import React from 'react';
import { MainInfoContainer } from './mainInfoStyled';
import { ICON_URL } from '../../api/api';
import { useAppSelector } from '../../hooks/hooks';
import useGsap from '../../hooks/useGsap';
import { cityNameSelector, descriptionSelector, mainSelector } from '../../redux/openWeatherReducer';
type TMainInfoProps = {
  isScrolled: boolean;
  background: string | null;
}
const MainInfo:React.FC<TMainInfoProps> = ({ isScrolled, background }) => {
  const city_name = useAppSelector(cityNameSelector);
  const { temp_now, temp_min, temp_max } = useAppSelector(mainSelector);
  const description = useAppSelector(descriptionSelector);
  const [tempRef, contRef, infoCityRef] = useGsap(isScrolled);
  const backgroundImg = `${ICON_URL}${background}@2x.png`;
  return (
    <>
      <MainInfoContainer ref={contRef} isScrolled={isScrolled}  backgroundImg={backgroundImg}>
        <span ref={infoCityRef} className='info_city'>{city_name}</span>
        <span ref={tempRef} className='info_temp'>{temp_now} <span className='celsius'></span></span>
        <span className='info_weather'>
          {isScrolled ? `${temp_now}° ${description}` : `${description}`}
        </span>
        <span className='info_hl'>H:{temp_max}<span className='celsius'></span>&nbsp;&nbsp;L:{temp_min}<span className='celsius'></span></span>
      </MainInfoContainer>
    </>
  );
}
export default MainInfo;