import React from 'react';
import styles from './Footer.module.css';
import Facebook from './facebook-app-logo-white.svg';
import Instagram from './instagram.svg';

function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.dotDotDot}>
                <strong>... </strong>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div><strong>Köszönet </strong></div>
                    <div>
                        <strong>A backend-ért: </strong>
                        <a href="http://kir-dev.sch.bme.hu/" target="_blank" rel="noopener noreferrer">Kir-Dev</a>
                    </div>
                    <div>
                        <strong>A design-ért és frontend-ért: </strong>
                        <a href="http://schdesign.hu/" target="_blank" rel="noopener noreferrer">Schönherz Design Stúdió</a>
                    </div>
                    <div>
                        <strong>A fotókért: </strong>
                        <a href="https://spot.sch.bme.hu/events/parkett-klub/" target="_blank" rel="noopener noreferrer">SPOT fotókör</a>
                    </div>
                    <div>
                        <strong>A hangosításért: </strong>
                        <a href="https://acstudio.sch.bme.hu/" target="_blank" rel="noopener noreferrer">AC Studio és Live</a>
                    </div>
                    <div>
                        <strong>A videókért: </strong>
                        <a href="https://bsstudio.hu/" target="_blank" rel="noopener noreferrer">Budavári Schönherz Stúdió</a>
                    </div>
                </div>
                <div className={styles.center}>
                    <div><strong>Helyszín </strong></div>
                    <div>Schönherz Zoltán Kollégium,</div>
                    <div>1117 Budapest, Irinyi József utca 42. </div>
                </div>
                <div className={styles.right}>
                    <div><strong>Emailcím: </strong></div>
                    <div>parkettklub@sch.bme.hu</div>
                    <div>
                        <a href="https://www.instagram.com/parkettklub/" target="_blank" rel="noopener noreferrer">
                            <img alt="" className={styles.image} src={Instagram} />
                        </a>
                        <a href="https://www.facebook.com/ParkettKlub/" target="_blank" rel="noopener noreferrer">
                            <img alt="" className={styles.image} src={Facebook} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
