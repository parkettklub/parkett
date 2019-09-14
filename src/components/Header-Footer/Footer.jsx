import React from 'react';
import styles from './Footer.module.css';
import Facebook from './facebook-app-logo-white.svg';
import Instagram from './instagram.svg';

function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.title}><strong>A honlapot készítette </strong></div>
                    <div>
                        <strong>backend: </strong>
                        <a href="http://kir-dev.sch.bme.hu/" target="_blank" rel="noopener noreferrer">Kir-Dev</a>
                    </div>
                    <div>
                        <strong>design és frontend: </strong>
                        <a href="http://schdesign.hu/" target="_blank" rel="noopener noreferrer">Schönherz Design Stúdió</a>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.title}><strong>Helyszín </strong></div>
                    <div>Schönherz Kollégium,</div>
                    <div>1117 Budapest, Irinyi József utca 42. </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}><strong>Elérhetőségek: </strong></div>
                    <div>parkettklub AT sch.bme.hu</div>
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
