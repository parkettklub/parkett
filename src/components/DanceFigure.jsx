import React from 'react';
import Salsa from './dancing-figures/Salsa.svg';
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Swing from './dancing-figures/Swing.svg';
import './EventDetail.css';

function DanceFigure(props) {
    if (props.dance.name === "salsa") {
        return (
            <div className="eventdetail-dance-figure">
                <img src={Salsa} alt="" />
            </div>
        )
    } else if (props.dance.name === "folk") {
        return (
            <div className="eventdetail-dance-figure">
                <img src={Folk} alt="" />
            </div>
        )
    } else if (props.dance.name === "swing") {
        return (
            <div className="eventdetail-dance-figure">
                <img src={Swing} alt="" />
            </div>
        )
    } else if (props.dance.name === "kizomba") {
        return (
            <div className="eventdetail-dance-figure">
                <img src={Kizomba} alt="" />
            </div>
        )
    } else {
        return (
            <div className="eventdetail-dance-figure">
            </div>
        )
    }

}

export default DanceFigure;