import React from 'react';
import { ReusableCardContainer } from '../ReusableCard/reusableCardStyled';
import { cardsConfig } from './../../constants/cardsConfig';
import ReusableCard from './../ReusableCard/ReusableCard';

function CardMapper({top, isScrolled}) {
    return (
        <>
            {cardsConfig.map(card => (
                <ReusableCardContainer isTwoBlocks={card.isTwoBlocks} key={card.id}>
                    <ReusableCard
                        {...card} // multiple props {title, limit, isImg, isTwoBlocks, content}
                        title={card.title[0]}
                        top={top}
                        isScrolled={isScrolled}
                    >
                        {card.content[0]}
                    </ReusableCard>
                    {card.isTwoBlocks && (
                        <ReusableCard
                            {...card}
                            title={card.title[1]}
                            top={top}
                            isScrolled={isScrolled}
                        >
                            {card.content[1]}
                        </ReusableCard>
                    )}
                </ReusableCardContainer>
            ))}
        </>
    );
}

export default CardMapper;