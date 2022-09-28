import React from 'react';
import loop from '../../../src/common/img/loop.svg';
import "./input.css";
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import { setInputValue } from '../../redux/airQualityReducer';
import { useNavigate } from 'react-router';
import { rejectSelector, setReject } from './../../redux/openWeatherReducer';
const Input:React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const reject = useAppSelector(rejectSelector);
    const inputValue = useAppSelector(state => state.airQuality.inputValue);
    const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(reject===404){
            dispatch(setReject(null))
        }
        if (e.target.value==='') {
            navigate('/');
            dispatch(setInputValue(''));
        }
        dispatch(setInputValue(e.target.value));

    }

    return (
        <div className="input__main">
        <div className="search">
            <img className='loop' id="loop" src={loop} alt='loop' />
            <input 
            onChange={(e) => {
                OnChangeHandler(e);
            }}
            value={inputValue}
            // autoFocus
            type="search" placeholder="Search for a city" />
        </div>
        </div>
    );
}
// export default Input
export default React.memo(Input);