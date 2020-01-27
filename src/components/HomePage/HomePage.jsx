import React from 'react';
import MainEvents from './MainEvents';
import styles from './HomePage.module.css';
import texts from '../../utils/Descriptions';

function JoinUsPage() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScdcE5Ha6hBGbEQzvXT3Fq1bOBxMppOMg5TUrh0YahBwovvsw/viewform';
}

function NewsFeedSubscription() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const HomePage = () => (
    <div className={styles.main}>
        <div className={styles.join}>
            <div className={styles.text}>
                <div className={styles.title}>{texts.home.title}</div>
                <div className={styles.description}>
                    {texts.home.description}
                </div>
                <div className={styles.actions}>
                    <button type="button" onClick={JoinUsPage}>
                        {texts.home.joinus}
                    </button>
                    <button type="button" onClick={NewsFeedSubscription}>
                        {texts.home.newsFeed}
                    </button>
                </div>
            </div>
        </div>
        <MainEvents />
    </div>
);

export default HomePage;
