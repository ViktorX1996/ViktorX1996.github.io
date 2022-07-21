import React, { useLayoutEffect } from 'react';

function WindMapInfo(props) {
    useLayoutEffect(() => {
        const options = {
            key: 'xyz',
            lat: 41.3,
            lon: 2.1,
            zoom: 10,
        };
        window.windyInit(options, (windyAPI) => {
            const { map } = windyAPI;
            window.L.popup()
                .setLatLng([41.3, 2.1])
                .setContent(':)')
                .openOn(map);
        });
    }, [])
    return (
        <div id="windy" style={{ height: '300px', width: 'auto', border: '1px solid red' }}></div>
    );
}

export default WindMapInfo;