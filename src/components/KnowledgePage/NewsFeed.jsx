import React from 'react';
import styles from '../CommunityPage/JoinUs.module.css';
import texts from '../../utils/Descriptions';

function newsFeedSubscription() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const NewsFeed = () => (
    <div className={styles.main}>
        <div className={styles.title}>{texts ? texts.newsfeed.title : ''}</div>
        <div className={styles.desc}>
            {texts ? texts.newsfeed.desc : ''}
        </div>
        <div
            className={styles.submit}
            onClick={newsFeedSubscription}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {texts ? texts.newsfeed.button : ''}
        </div>
    </div>
);

export default NewsFeed;
