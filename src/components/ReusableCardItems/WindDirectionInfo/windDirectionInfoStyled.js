import styled from "styled-components";

export const WindDirectionInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-top: 10px;
`;
export const WindDirectionCompass = styled.div`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    font-family: var(--RobotoFlex);
    box-shadow: var(--compass-shadow);
`;
export const WindDirection = styled.div`
    height: 100%;
    width: 100%;
    display: block;
    background: #a5a5a5;
    border-radius: 100%;
    & p {
    text-align: center;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 80px;
    display: block;
    margin-top: -45px;
    font-size: 12px;
    font-weight: var(--font-weight-regular);
    }
    & span {
    display: block;
    line-height: normal;
    margin-top: -24px;
    font-size: 11px;
    font-weight: normal;
    }
`;
export const WindDirectionArrow = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    transform: ${props => `rotate(${props.windDeg}deg)`};
    :after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 25px solid red;
    position: absolute;
    top: -7px;
    left: 50%;
    margin-left: -5px;
    z-index: 99;
    }
`;














