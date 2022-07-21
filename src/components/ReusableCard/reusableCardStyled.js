import styled from "styled-components";

export const TwoBlocksStyle = `
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
`;


export const ReusableCardContainer = styled.div`
  height: auto;
  ${props => props.isTwoBlocks ? TwoBlocksStyle : ""};
  margin: ${props => props.isTwoBlocks ? "0 10px" : ""};
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
`;

export const ReusableCardStyled = styled.div`
    outline: 1px solid var(--grey-1);
    background: var(--opacity_background);
    width: 90%;
    margin: ${props => props.isTwoBlocks ? "0 10px" : "0 auto"};
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
    
    position: sticky;
    width: ${props => props.isTwoBlocks ? "calc(50% - 20px)" : "calc(100% - 40px)"};

`;

export const ReusableCardHeader = styled.div`
    position: sticky;
    top: ${props => props.isScrolled ? "106px" : ""};
    transition: all 0.5s;
    font-weight: var(--font-weight-regular);
    font-size: 15px;

    background-color: ${props => props.isScrolled ? "rgba(21, 28, 38, 1)" : ""};
    z-index: ${props => props.isScrolled ? "5000" : "0"};
`;

export const ReusableCardHeading = styled.div`
  
    display: flex;
    flex-direction: row;
    position: relative;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: ${props => props.top  > props.limit ? "" : "1px solid var(--line-white-015)"};
    & img {
        transition: all 0.5s;
        margin-right: 7px;
        opacity: ${props => props.top > props.limit ? "0.3" : "1"};

        color: orange;
        font-size: 10px;
    }
    & span {
    transition: all 0.5s;
    color: ${props => props.top > props.limit ? "var(--white-text-30)" : "var(--text-white)"};
    letter-spacing: 0.5px;
    }
`;
export const ReusableCardInfo = styled.div`
    padding-top: 5px;
    letter-spacing: 0.5px;

    & .big_text{
        font-weight: var(--font-weight-regular);
        font-size: 36px;
    }
    & .upper_medium_text{
        font-weight: var(--font-weight-medium);
        font-size: 27px;
    }
    &  .medium_text {
        font-weight: var(--font-weight-medium);
        font-size: 23px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    & .small_text {
        font-weight: var(--font-weight-regular);
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 15px;
    }
`;








