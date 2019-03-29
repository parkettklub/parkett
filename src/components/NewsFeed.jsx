import React from 'react';
import styles from './JoinUs.module.css';

function newsFeedSubscription() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const NewsFeed = () => (
    <div className={styles.main}>
        <div className={styles.title}>Iratkozz fel Hírlevelünkre!</div>
        <div className={styles.desc}>
            {`Ha szeretnél értesülni a bulikról és a tanfolyamokról iratkozz fel!
            Álltalában hetente maximum 1 emailt fogsz kapni bulikról, worksopokról
            és egyéb hírekről.
            A hírlevélről bármikor leiratkozhatsz az emailben kapott linken keresztül.`}
        </div>
        <div
            className={styles.submit}
            onClick={newsFeedSubscription}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {'Feliratkozom'}
        </div>
    </div>
);

export default NewsFeed;
