import React from 'react';
import texts from '../../utils/Descriptions';

const Services = () => (
    <div>
        <div>{texts ? texts.services.title : ''}</div>
        <li key="ruhatar"><strong>{texts ? texts.services.cloakroom : ''}</strong></li>
        <li key="italpult"><strong>{texts ? texts.services.drinking : ''}</strong></li>
    </div>
);

export default Services;
