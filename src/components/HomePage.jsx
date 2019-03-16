import React from 'react';
import MainEvents from './MainEvents';
import styles from './HomePage.module.css';
import Community from './community.jpg';

function JoinUsPage() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScdcE5Ha6hBGbEQzvXT3Fq1bOBxMppOMg5TUrh0YahBwovvsw/viewform';
}

function NewsFeedSubscription() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const HomePage = () => (
    <div className={styles.main}>
        <div className={styles.join}>
            <div className={styles.image}>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>Csatlakozz hozzánk!</div>
                <div className={styles.description}>
                    {`A rendező gárda kb. 10-15 főből áll, 
                akik szabadidejükben, öntevékeny módon csapattá szerveződve végzik 
                a Parkett Klub körüli teendőket. 
                Célunk az egyetemistáknak és a társastáncok kedvelőinek 
                színes és igényes tánctanulási és szórakozási lehetőséget nyújtani, 
                és ezzel minél több emberhez eljuttatni a tánc üzenetét.`}
                </div>
                <div className={styles.actions}>
                    <button type="button" onClick={JoinUsPage}>
                        {'Csatlakozz'}
                    </button>
                    <button type="button" onClick={NewsFeedSubscription}>
                        {'Feliratkozom'}
                    </button>
                </div>
            </div>

        </div>
        <div className={styles.events}>
            <MainEvents />
        </div>
    </div>
);

export default HomePage;
