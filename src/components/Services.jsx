import React from 'react'
import './Knowledge-Base.css';
import OpenCloseComponent from './OpenCloseComponent';

function Services() {
    const content = [];
    content.push(<li> <strong>Ingyenes ruhatár </strong></li>);
    content.push(<li> <strong>Italpult kedvezményes árakkal </strong></li>);
    return (
        <OpenCloseComponent title="Bulin lévő szolgáltatások" content={content} />
    )
}


export default Services