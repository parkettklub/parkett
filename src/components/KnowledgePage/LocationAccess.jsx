import React from 'react';
import texts from '../../utils/Descriptions';

const LocationAccess = () => (
    <div>
        <div key="megkozelites">
            <strong>{texts.path.title}</strong>
            {texts.path.desc}
        </div>
        <div key="bejutas">
            <strong>{texts.wayIn.title}</strong>
            {texts.wayIn.desc}
        </div>
    </div>
);

export default LocationAccess;
