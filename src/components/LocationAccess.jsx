import React from 'react';
import './Knowledge-Base.css';
import OpenCloseComponent from './OpenCloseComponent';
import texts from './Descriptions';

const LocationAccess = () => (
    <OpenCloseComponent title="Kollégiumba való bejutás">
        <div key="megkozelites">
            <strong>Megközelítés: </strong>
            {texts.path}
        </div>
        <div key="bejutas">
            <strong>Bejutás: </strong>
            {texts.wayIn}
        </div>
    </OpenCloseComponent>
);

export default LocationAccess;
