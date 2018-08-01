import React from 'react';
import './Footer.css';
import Facebook from './facebook-logo.svg';
import Instagram from './instagram.svg';

function Footer(props) {

    return (
        <div className="main-footer-content">
            <div className="footer-left">
                <div><b>Köszönet</b></div>
                <div><b>A fotókért:</b> SPOT fotókör</div>
                <div><b>A hangosításért:</b> AC Studio és Live</div>
                <div><b>A videókért:</b> Budavári Schönherz Stúdió</div>
                <div><b>Otthonunkért:</b> Schönherz Kollégium</div>
            </div>
            <div className="footer-center">
                <div><b>Helyszín</b></div>
                <div>Schönherz Zoltán Kollégium,</div>
                <div>1117 Budapest, Irinyi József utca 42. </div>
                <div><b>Designed by:</b> Schönherz Design Studio</div>
                <div><b>Backend by:</b> Kir-Dev</div>
            </div>
            <div className="footer-right">
                <div><b>Emailcím:</b></div>
                <div>parkettklub@sch.bme.hu</div>
                <div>
                    <img className="footer-image" src={Instagram} />
                    <img className="footer-image" src={Facebook} />
                </div>
            </div>
        </div>
    )
}

export default Footer;