import React from 'react';
import OpenCloseComponent from './OpenCloseComponent';

function Services() {
    const content = [];
    content.push(<li key="ruhatar"><strong>Ingyenes ruhatár </strong></li>);
    content.push(<li key="italpult"><strong>Italpult kedvezményes árakkal </strong></li>);
    return (
        <OpenCloseComponent title="Bulin lévő szolgáltatások">
            {content}
        </OpenCloseComponent>
    );
}

export default Services;
