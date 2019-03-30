import React from 'react';
import TipsAndTricks from './TipsAnTricks';
import LocationAccess from './LocationAccess';
import Attention from './Attention';
import Services from './Services';
import Dances from './Dances';
import EditButton from './EditButton';
import styles from './Knowledge.module.css';
import NewsFeed from './NewsFeed';

const KnowledgeBaseComponent = () => (
    <div className={styles.main}>
        <div className={styles.header}>
            <EditButton />
            <NewsFeed />
        </div>
        <div className={styles.dances}>
            <Dances />
        </div>
        <div className={styles.general}>
            <div>
                <div className={styles.title}>Álltalánosan a bulikról</div>
                <div>
                    {`Kéthetente megtelik a kollégium nagyterme a város tánckedvelő fiataljaival, 
            és a hangfalakból salsa, rock & roll, boogie-woogie vagy modern társastáncok zenéi szólnak, 
            esetleg éppen egy zenekar húzza élőben a talpalávalót. Nagy a kínálat, így nálunk biztosan 
            megtalálod a Hozzád illő táncstílust és bulit.`}
                </div>
                <div className={styles.thanks}>
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
            </div>
        </div>
        <div className={styles.attention}>
            <Attention />
        </div>
        <div className={styles.drinksAndPlace}>
            <LocationAccess />
            <Services />
        </div>
        <div className={styles.tips}>
            <TipsAndTricks />
        </div>
    </div>
);

export default KnowledgeBaseComponent;
