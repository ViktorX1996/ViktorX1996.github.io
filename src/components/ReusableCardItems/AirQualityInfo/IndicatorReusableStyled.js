import  styled from 'styled-components';


export const IndicatorContainer = styled.div`
  padding-top: ${(props) => props.isPadding ? "10px" : 0};
  display: grid;
  /* justify-items: center; */
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 50%;
  gap: 0px 0px;
  grid-auto-flow: row;

  grid-template-areas:
    "AirQualityIndicator IndicatorName IndicatorNumber";
`;
export const AirQualityIndicator = styled.div`
    grid-area: AirQualityIndicator;
    justify-self: center;
    & div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 5px;
        border-radius: 3px;

    }
`;
export const IndicatorName = styled.div`
    grid-area: IndicatorName;
`;
export const IndicatorNumber = styled.div`
    grid-area: IndicatorNumber;
    justify-self: center;
    
`;

























