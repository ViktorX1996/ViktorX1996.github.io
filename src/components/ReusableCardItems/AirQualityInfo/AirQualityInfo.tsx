import React from 'react';
import { airColorsSelector, airDataSelector, airStatusSelector } from '../../../redux/airQualityReducer';
import IndicatorReusable from './IndicatorReusable';
import { indicatorsConfig } from '../../../constants/indicatorsConfig';
import { useAppSelector } from '../../../hooks/hooks';

const AirQualityInfo: React.FC = () => {
    const data = useAppSelector(airDataSelector)
    const status = useAppSelector(airStatusSelector)
    const colorsRedux = useAppSelector(airColorsSelector)
    // console.log(status);
    // console.log(colorsRedux[0]);

    return (
        <>
            {status === 'success' && colorsRedux && (
                <>
                    {colorsRedux[0].aqi===null && <span className='medium_text'>No data</span>}
                    {colorsRedux[0].aqi && data.aqi && 
                        <p className='upper_medium_text' style={{ color: colorsRedux[0].aqi }}>AQ index: {data.aqi}
                            {data.aqi >= 0 && data.aqi <= 50 && <span className='medium_text'> - Good</span>}
                            {data.aqi >= 51 && data.aqi <= 100 && <span className='medium_text'> - Moderate</span>}
                            {data.aqi >= 101 && data.aqi <= 150 && <span className='small_text'> - Unhealthy for Sensitive Groups</span>}
                            {data.aqi >= 151 && data.aqi <= 200 && <span className='medium_text'> - Unhealthy</span>}
                            {data.aqi >= 201 && data.aqi <= 300 && <span className='medium_text'> - Very Unhealthy</span>}
                            {data.aqi >= 301 && data.aqi <= 500 && <span className='medium_text'> - Hazardous</span>}
                        </p>}
                    {/* {colorsRedux[1].pm10 && (
                        <IndicatorReusable bgcolor={colorsRedux[1].pm10} name={'PM'} subNum={10} number={data.pm10} />
                    )}
                    {colorsRedux[2].pm25 && (
                        <IndicatorReusable bgcolor={colorsRedux[2].pm25} name={'PM'} subNum={2.5} number={data.pm25} />
                    )}
                    {colorsRedux[3].ozone && (
                        <IndicatorReusable bgcolor={colorsRedux[3].ozone} name={'Ozone'} number={data.ozone} />
                    )}
                    {colorsRedux[4].co && (
                        <IndicatorReusable bgcolor={colorsRedux[4].co} name={'CO'} number={data.co} />
                    )}
                    {colorsRedux[6].no2 && (
                        <IndicatorReusable bgcolor={colorsRedux[6].no2} name={'NO'} subNum={2} number={data.no2} />
                    )}
                    {colorsRedux[5].so2 && (
                        <IndicatorReusable bgcolor={colorsRedux[5].so2} name={'SO'} subNum={2} number={data.so2} />
                    )} */}

                        {/* НИЖЕ КОД ЗАМЕНЯЕТ ВЕРХНИЙ НО С КОНФИГОМ */}

                    {indicatorsConfig.map((el) => {
                        return <IndicatorReusable key={el.label} label={el.label} subNum={el.subNum} 
                        valueName={el.valueName} bgcolorNumber={el.bgcolorNumber} data={data} colorsRedux={colorsRedux}/>
                                        
                    })}
                </>
            )}
        </>
    )
}

export default AirQualityInfo;
