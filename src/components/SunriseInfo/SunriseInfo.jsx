import React from 'react';
import sunrise from '../../common/img/sunrise.svg';
import { SunriseHeader, SunriseInfoContainer, SunriseHeading, SunriseMainInfo } from './SunriseInfoStyled';

function SunriseInfo({isScrolled,top, limit}) {
    return (
        // <SunriseInfoContainer isScrolled = {isScrolled}>
        //     <SunriseHeader isScrolled = {isScrolled}>
        //         <SunriseHeading isScrolled = {isScrolled} top={top}  limit={limit} >
        //             <img src={sunrise} alt='sunrise_logo' />
        //             <span>SUNRISE</span>
        //         </SunriseHeading>
        //     </SunriseHeader>
        //     <SunriseMainInfo>
            <>
                <span className='big_text'>6:28am</span>
                <p className='medium_text'>Sunset: 6:10pm</p>
            </>
        //     </SunriseMainInfo>
        // </SunriseInfoContainer>
    );
}

export default SunriseInfo;