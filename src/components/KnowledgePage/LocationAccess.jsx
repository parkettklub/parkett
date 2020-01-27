import React from 'react';
import texts from '../../utils/Descriptions';

const LocationAccess = () => (
    <div>
        <div key="megkozelites">
            <strong>{texts ? texts.path.title : ''}</strong>
            {texts ? texts.path.desc : ''}
        </div>
        <div key="bejutas">
            <strong>{texts ? texts.wayIn.title : ''}</strong>
            {texts ? texts.wayIn.desc : ''}
        </div>
    </div>
);

export default LocationAccess;
