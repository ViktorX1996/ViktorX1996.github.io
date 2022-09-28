import React, { useMemo } from 'react';
import { ReusableCardHeader, ReusableCardStyled, ReusableCardHeading, ReusableCardInfo } from './reusableCardStyled';
import '..//..//..//src//index.css';
import { imgBase } from '../../constants/cardTitles';
import { useSelector } from 'react-redux';
import { isScrolledSelector } from '../../redux/airQualityReducer';

type TReusableCardProps = {
    children: React.ReactNode;
    title: string;
    isTwoBlocks: boolean;
    isImg?: boolean;
}
//isImg = true значит по умолчанию
const ReusableCard: React.FC<TReusableCardProps> = ({ children, title,isTwoBlocks,isImg = true }) => {
    const imgSrc = imgBase[title];
    const isScrolled = useSelector(isScrolledSelector);
    // console.log(isScrolled, 'isScrolled');
        
const memoizedChildren = useMemo(() => {
    return (
        <ReusableCardInfo>
            {children}
        </ReusableCardInfo>
    )
},[]) // eslint-disable-line
    return (
            <ReusableCardStyled  isTwoBlocks={isTwoBlocks}>
                <ReusableCardHeader isScrolled={isScrolled}>
                    <ReusableCardHeading>
                        {isImg ? <img src={imgSrc} alt={title} /> : ''}
                        <span>{title}</span>
                    </ReusableCardHeading>
                </ReusableCardHeader>
                    {memoizedChildren}
            </ReusableCardStyled>
    );
}

export default ReusableCard;