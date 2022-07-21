import React from 'react';
import { ReusableCardHeader, ReusableCardStyled, ReusableCardHeading, ReusableCardInfo } from './reusableCardStyled';
import '..//..//..//src//index.css';
import { imgBase } from './../../constants/cardTitles';

//isImg = true значит по умолчанию
function ReusableCard({ children, isScrolled, top, limit, title,isTwoBlocks,isImg = true }) {
    const imgSrc = imgBase[title];
    return (
            <ReusableCardStyled isScrolled={isScrolled} isTwoBlocks={isTwoBlocks}>
                <ReusableCardHeader isScrolled={isScrolled} top={top} limit={limit}>
                    <ReusableCardHeading isScrolled={isScrolled} top={top} limit={limit} >
                        {isImg ? <img src={imgSrc} alt={title} /> : ''}
                        <span>{title}</span>
                    </ReusableCardHeading>
                </ReusableCardHeader>
                <ReusableCardInfo>
                    {children}
                </ReusableCardInfo>
            </ReusableCardStyled>
    );
}

export default ReusableCard;