import { useAppSelector } from '../../../hooks/hooks';
import { feelsLikeSelector } from '../../../redux/openWeatherReducer';

function FeelsLikeInfo() {
    const feelsLike = useAppSelector(feelsLikeSelector);
    return (
        <>
            <p className='medium_text'>{feelsLike}<span className='celsius'/>&nbsp;&nbsp;C</p>
        </>
    );
}

export default FeelsLikeInfo;