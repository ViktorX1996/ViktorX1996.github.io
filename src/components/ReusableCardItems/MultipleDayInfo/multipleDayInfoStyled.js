import styled from "styled-components";

export const OpacityBlock = `
    outline: 1px solid var(--grey-1);
    background: var(--opacity_background);
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
`
export const LineUnder = `
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 1px solid var(--line-white-015);
`;

export const MultipleDayInfoContainer = styled.div`

    ${OpacityBlock}
    position: sticky;
    top: ${props => props.isScrolled ? "120px" : "260px"};
    /* width: calc(100% - 40px); */
`;

export const Header = styled.div`
    position: sticky;
    /* outline: 7px solid red; */
    top: ${props => props.isScrolled ? "107px" : "260px"};
    /* padding-top: 8px; */
    font-weight: 400;
    font-size: 15px;
    background-color: ${props => props.isScrolled ? "rgba(21, 28, 38, 1)" : ""};
    z-index: ${props => props.isScrolled ? "5000" : "0"};
`;
export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    position: relative;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: ${props => props.top  > props.limit ? "" : "1px solid var(--line-white-015)"};
    & img {
        transition: all 0.5s;
        margin-right: 7px;
        opacity: ${props => props.top > props.limit ? "0.3" : "1"};
    }
    & span {
    transition: all 0.5s;
    color: ${props => props.top > props.limit ? "var(--white-text-30)" : "var(--text-white)"};
    letter-spacing: 0.5px;
    }
`;
export const ForecastContainer = styled.div`
  padding-top: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "ForecastDay ForecastLogo ForecastMin ForecastMax";
`;
export const ForecastDay = styled.div`
    grid-area: ForecastDay;
`;
export const ForecastLogo = styled.div`
    grid-area: ForecastLogo;
    & img {
        width: 50px;
        height: 50px;
    }
`;
export const ForecastMin = styled.div`
    grid-area: ForecastMin;
`;
export const ForecastMax = styled.div`
    grid-area: ForecastMax;
`;