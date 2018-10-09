import React from 'react'
import './Knowledge-Base.css';
import OpenCloseComponent from './OpenCloseComponent';

function Services() {
    const content = [];
    content.push(<li><b>Ingyenes ruhatár</b></li>);
    content.push(<li><b>Italpult kedvezményes árakkal</b></li>);
    return (
        <OpenCloseComponent title="Bulin lévő szolgáltatások" content={content} />
    )
}


export default Services