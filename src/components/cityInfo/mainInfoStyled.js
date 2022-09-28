import styled from "styled-components";

export const MainInfoContainer = styled.div`
    /* transition: all 0.5s; */
    /* transition:   all 0.5s ease-in-out; */
    /* transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
will-change: transform; */
    background-color: rgba(18, 25, 35, 1);
    /* border: 1px solid red; */
    background-image: ${props => props.backgroundImg ? `url(${props.backgroundImg})` : ``};
    background-repeat: no-repeat;
    /* background-size: ${props => props.isScrolled ? `100px 100px` : `150px 150px`}; */
    z-index: 10;
    position: ${props => props.isScrolled ? "sticky" : "static"};
    top: ${props => props.isScrolled ? "-1px" : "10px"};
    width: 100%;
    /* border: 1px solid red; */
    padding-top: 22px;
    letter-spacing: 1px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & .info_city {
        /* transition: all 0.5s; */
        /* transition:   all 0.5s ease-in-out; */
        /* transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
will-change: transform;
will-change: opacity; */
    font-style: normal;
    font-weight: var(--font-weight-regular);
    /* transform: ${props => props.isScrolled ? `scale(1)` : `scale(1.2)`}; */
    font-size: 37px;
    /* font-size: ${props => props.isScrolled ? "20px" : "37px"}; */
    line-height: 44px;
    }
    
    & .info_temp {
        /* transition: all 0.5s; */
        /* transition:   all 0.5s ease-in-out; */
        /* transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
will-change: transform;
will-change: opacity; */
        /* opacity: ${props => props.isScrolled ? "0" : "1"}; */
    font-style: normal;
    /* transform: ${props => props.isScrolled ? `scale(0.3)` : `scale(1.2)`}; */
    /* border: 1px solid red; */
    font-size: 100px;
    /* font-size: ${props => props.isScrolled ? "25px" : "102px"}; */
    /* font-size: 100px; */
    /* line-height: 122px; */
    font-weight: var(--font-weight-light);
    margin-top: -10px;
    margin-bottom: -10px;
    }
    & .info_weather {
        /* transition: all 0.5s; */
        /* transition:   all 0.5s ease-in-out; */
        /* transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear; */
will-change: transform;
will-change: opacity;
    font-style: normal;
    font-weight: var(--font-weight-regular);
    /* transform: ${props => props.isScrolled ? `scale(1)` : `scale(1.2)`}; */
    /* font-size: ${props => props.isScrolled ? "15px" : "24px"}; */
    /* line-height: 29px; */
}
    & .info_hl {
        /* transition: all 0.5s; */
        /* transition:   all 0.5s ease-in-out; */
        /* transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
will-change: transform;
will-change: opacity; */
    font-style: normal;
    font-weight: var(--font-weight-medium);
    /* transform: ${props => props.isScrolled ? `scale(1)` : `scale(1.2)`}; */
    /* font-size: ${props => props.isScrolled ? "12px" : "21px"}; */
    opacity: ${props => props.isScrolled ? "0" : "1"};
    /* line-height: 25px; */
}
    & .celsius::after{
    content: "°";
    position: absolute;
}
    & .info_temp_opacity{
        /* transition: all 0.5s; */
        /* transition:   all 0.5s ease-in-out; */
        /* transition: all 0.5s linear;
        -moz-transition: all 0.5s linear;
-o-transition: all 0.5s linear;
-webkit-transition: all 0.5s linear;
will-change: transform;
will-change: opacity; */
         opacity: ${props => props.isScrolled ? "1" : "0"};
         font-size: 15px;
    }
    /* & .info_weather::before{
        content: "21°";
        position: absolute;
        left: 110px;
        opacity: ${props => props.isScrolled ? "1" : "0"};
    } */

`;









