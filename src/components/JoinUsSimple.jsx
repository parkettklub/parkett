import React from 'react';
import Card from './Card';
import styles from './JoinUs.module.css';

function editEventsPage() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScdcE5Ha6hBGbEQzvXT3Fq1bOBxMppOMg5TUrh0YahBwovvsw/viewform';
}

const JoinUsSimple = () => (
    <Card>
        <div className={styles.main}>
            <div className={styles.title}>Csatlakozz a rendezőkhöz!</div>
            <div
                className={styles.submit}
                onClick={editEventsPage}
                onKeyDown={() => { }}
                role="button"
                tabIndex={0}
            >
                {'Csatlakozás'}
            </div>
        </div>
    </Card>
);

export default JoinUsSimple;
