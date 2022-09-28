import React from 'react';
import { TColors } from '../../../redux/airQualityReducer';
import { IndicatorContainer, IndicatorName, IndicatorNumber,AirQualityIndicator } from './IndicatorReusableStyled';

type TDataProps = {
    [key: string]: number | null;
}
type IndicatorReusableProps = {
    label: string,
    subNum: number | null,
    valueName: string,
    bgcolorNumber: number,
    data:  TDataProps
    colorsRedux: TColors[],
}

const IndicatorReusable: React.FC<IndicatorReusableProps> = ({ label, subNum, valueName, bgcolorNumber, data, colorsRedux }) => {
    // console.log(colorsRedux[bgcolorNumber][valueName as keyof TColors]);
    // console.log(data[valueName]);
    
    return (
        <IndicatorContainer isPadding={data[valueName]}>
            <AirQualityIndicator>
                <div style={{ backgroundColor: colorsRedux[bgcolorNumber][valueName as keyof TColors]! }}/> 
            </AirQualityIndicator>
           {data[valueName] && <IndicatorName>{label}<sub>{subNum}</sub></IndicatorName>}
            <IndicatorNumber>{data[valueName]}</IndicatorNumber>
        </IndicatorContainer>
    );
}
//colorsRedux[5].so2
export default IndicatorReusable;