import React from 'react';
import loop from '../../../src/common/img/loop.svg';
import "./input.css";
function Input(props) {
    return (
        <div className="input__main">
        <div className="search">
            <img className='loop' id="loop" src={loop} alt='loop' />
            <input type="search" placeholder="Search for a city or airport" />
        </div>
        </div>
    );
}

export default Input;