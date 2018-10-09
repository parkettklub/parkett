import React from 'react';
import './Footer.css';
import Facebook from './facebook-logo.svg';
import Instagram from './instagram.svg';

function Footer(props) {

    return (
        <footer className='main-footer'>
            <div className="dotDotDot">
                <b>...</b>
            </div>
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
                    <div><b>Designed by:</b> Schönherz Design Stúdió</div>
                    <div><b>Backend by:</b> Kir-Dev</div>
                </div>
                <div className="footer-right">
                    <div><b>Emailcím:</b></div>
                    <div>parkettklub@sch.bme.hu</div>
                    <div>
                        <a href="https://www.instagram.com/parkettklub/" target="_blank">
                            <img className="footer-image" src={Instagram} />
                        </a>
                        <a href="https://www.facebook.com/ParkettKlub/" target="_blank">
                            <img className="footer-image" src={Facebook} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;