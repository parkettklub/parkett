import React from 'react'
import './Knowledge-Base.css';
import OpenCloseComponent from './OpenCloseComponent';

function LocationAccess() {
    const content = [];
    content.push(<div><b>Megközelítés:</b> 4-es villamos › Budafoki út 33, 86, 212-es busz › Október huszonharmadika utca</div>);
    content.push(<div><b>Bejutás:</b> A lépcsőn fel a porta mellett elhaladva bal oldalt (nem a forgó villákon keresztül)</div>);
    return (
        <OpenCloseComponent title="Kollégiumba való bejutás" content={content} />
    )
}

export default LocationAccess