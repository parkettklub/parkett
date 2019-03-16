import React from 'react';
import JoinUsSimple from './JoinUsSimple';
import NewsFeed from './NewsFeed';
import MainEvents from './MainEvents';
import styles from './HomePage.module.css';

const HomePage = () => (
    <div className={styles.main}>
        <div className={styles.join}>
            <JoinUsSimple />
            <NewsFeed />
        </div>
        <div className={styles.events}>
            <MainEvents />
        </div>
    </div>
);

export default HomePage;
