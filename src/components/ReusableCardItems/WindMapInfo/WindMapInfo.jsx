import React, { useLayoutEffect } from 'react';
// import { WIND_API_KEY } from './../../api/api';
import { useSelector } from 'react-redux';
import { locationSelectorLat, locationSelectorLon } from '../../../redux/openWeatherReducer';

function WindMapInfo(props) {
    const locationLon = useSelector(locationSelectorLon);
    const locationLat = useSelector(locationSelectorLat);
    useLayoutEffect(() => {
        const options = {
            key: 'wM8wB2E4cLGgHOhq2NoKwITjitTHqNDs',
            zoom: 10,
        };
        window.windyInit(options, (windyAPI) => {
            const { map } = windyAPI;
            window.L.popup()
                .setLatLng([locationLat, locationLon])
                .setContent('selected city')
                .openOn(map);
        });
    }, []) //eslint-disable-line
    return (
        <div id="windy" style={{ height: '300px', width: 'auto' }}></div>
    );
}

export default WindMapInfo;