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
            <div className={styles.title}>Álltalánosan a bulikról</div>
            <div>
                {`Kéthetente megtelik a kollégium nagyterme a város tánckedvelő fiataljaival, 
            és a hangfalakból salsa, rock & roll, boogie-woogie vagy modern társastáncok zenéi szólnak, 
            esetleg éppen egy zenekar húzza élőben a talpalávalót. Nagy a kínálat, így nálunk biztosan 
            megtalálod a Hozzád illő táncstílust és bulit.`}
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
