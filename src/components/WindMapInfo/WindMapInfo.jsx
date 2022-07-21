import React, { useLayoutEffect } from 'react';
// import { WIND_API_KEY } from './../../api/api';

function WindMapInfo(props) {
    useLayoutEffect(() => {
        const options = {
            key: 'wM8wB2E4cLGgHOhq2NoKwITjitTHqNDs',
            lat: 41.3,
            lon: 2.1,
            zoom: 10,
        };
        window.windyInit(options, (windyAPI) => {
            const { map } = windyAPI;
            window.L.popup()
                .setLatLng([32.8156, 34.9892])
                .setContent(':)')
                .openOn(map);
        });
    }, [])
    return (
        <div id="windy" style={{ height: '300px', width: 'auto' }}></div>
    );
}

export default WindMapInfo;