import styled from "styled-components";

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-columns: 5fr;
    gap: 0px 20px;
    grid-auto-flow: row;
    /* grid-template-areas:
        "title title title title title"
        "area1 area2 area3 area4 area5";
    .area1 {
        grid-area: area1;
    }

    .area2 {
        grid-area: area2;
    }

    .area3 {
        grid-area: area3;
    }

    .area4 {
        grid-area: area4;
    }

    .area5 {
        grid-area: area5;
    } */
`;
