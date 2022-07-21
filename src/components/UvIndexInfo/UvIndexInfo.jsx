import React from 'react';
import { UvIndexInfoContainer, UvHeading, UvHeader, UvMainInfo } from './uvIndexInfoStyled';
import uv from '../../common/img/uv.svg';

function UvIndexInfo({ isScrolled, top, limit }) {
    return (
        // <UvIndexInfoContainer isScrolled = {isScrolled}>
        //     <UvHeader isScrolled = {isScrolled}>
        //         <UvHeading isScrolled = {isScrolled} top={top}  limit={limit} >
        //             <img src={uv} alt='uv_logo' />
        //             <span>UV-INDEX</span>
        //         </UvHeading>
        //     </UvHeader>
        //     <UvMainInfo>
        <>
            <span className='big_text'>0</span>
            <p className='medium_text'>Low</p>
            <p className='small_text'>Low for the rest of the day.</p>
        </>
        //     </UvMainInfo>
        // </UvIndexInfoContainer>
    );
}

export default UvIndexInfo;