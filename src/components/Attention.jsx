import React from 'react';
import OpenCloseComponent from './OpenCloseComponent';
import texts from './Descriptions';

const Attention = () => (
    <OpenCloseComponent title="Figyelem!">
        <div>
            {texts.attention}
        </div>
    </OpenCloseComponent>
);

export default Attention;
