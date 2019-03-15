import React from 'react';
import './Footer.css';
import Facebook from './facebook-app-logo-white.svg';
import Instagram from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="dotDotDot">
                <strong>... </strong>
            </div>
            <div className="main-footer-content">
                <div className="footer-left">
                    <div><strong>Köszönet </strong></div>
                    <div>
                        <strong>A backend-ért: </strong>
                        <a href="http://kir-dev.sch.bme.hu/">Kir-Dev</a>
                    </div>
                    <div>
                        <strong>A design-ért és frontend-ért: </strong>
                        <a href="http://schdesign.hu/">Schönherz Design Stúdió</a>
                    </div>
                    <div>
                        <strong>A fotókért: </strong>
                        <a href="https://spot.sch.bme.hu/events/parkett-klub/">SPOT fotókör</a>
                    </div>
                    <div>
                        <strong>A hangosításért: </strong>
                        <a href="https://acstudio.sch.bme.hu/">AC Studio és Live</a>
                    </div>
                    <div>
                        <strong>A videókért: </strong>
                        <a href="https://bsstudio.hu/">Budavári Schönherz Stúdió</a>
                    </div>
                </div>
                <div className="footer-center">
                    <div><strong>Helyszín </strong></div>
                    <div>Schönherz Zoltán Kollégium,</div>
                    <div>1117 Budapest, Irinyi József utca 42. </div>
                </div>
                <div className="footer-right">
                    <div><strong>Emailcím: </strong></div>
                    <div>parkettklub@sch.bme.hu</div>
                    <div>
                        <a href="https://www.instagram.com/parkettklub/" target="_blank" rel="noopener noreferrer">
                            <img alt="" className="footer-image" src={Instagram} />
                        </a>
                        <a href="https://www.facebook.com/ParkettKlub/" target="_blank" rel="noopener noreferrer">
                            <img alt="" className="footer-image" src={Facebook} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
