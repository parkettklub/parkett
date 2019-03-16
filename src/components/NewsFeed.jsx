import React from 'react';
import Card from './Card';
import styles from './JoinUs.module.css';

function editEventsPage() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const NewsFeed = () => (
    <Card>
        <div className={styles.main}>
            <div className={styles.title}>Iratkozz fel Hírlevelünkre!</div>
            <div
                className={styles.submit}
                onClick={editEventsPage}
                onKeyDown={() => { }}
                role="button"
                tabIndex={0}
            >
                {'Feliratkozom!'}
            </div>
        </div>
    </Card>
);

export default NewsFeed;
