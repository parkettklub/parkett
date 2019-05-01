import React from 'react';
import styles from './JoinUs.module.css';
import texts from '../../utils/Descriptions';

function JoinUsPage() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScdcE5Ha6hBGbEQzvXT3Fq1bOBxMppOMg5TUrh0YahBwovvsw/viewform';
}

const JoinUsSimple = () => (
    <div className={styles.main}>
        <div className={styles.title}>{texts.community.joinus}</div>
        <div
            className={styles.submit}
            onClick={JoinUsPage}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {'Jelentkezem'}
        </div>
    </div>
);

export default JoinUsSimple;
