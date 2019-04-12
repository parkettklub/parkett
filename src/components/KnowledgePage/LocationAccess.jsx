import React from 'react';
import texts from '../../utils/Descriptions';

const LocationAccess = () => (
    <div>
        <div key="megkozelites">
            <strong>Megközelítés: </strong>
            {texts.path}
        </div>
        <div key="bejutas">
            <strong>Bejutás: </strong>
            {texts.wayIn}
        </div>
    </div>
);

export default LocationAccess;
