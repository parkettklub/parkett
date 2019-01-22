import React from 'react';
import Members from './Members';
import styles from './Community.module.css';
import JoinUsSimple from './JoinUsSimple';

const CommunityComponent = () => (
    <div className={styles.page}>
        <JoinUsSimple />
        <Members />
    </div>
);

export default CommunityComponent;
