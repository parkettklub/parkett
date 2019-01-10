import React from 'react';
import Members from './Members';
import JoinUsComponent from './JoinUsComponent';
import styles from './Community.module.css';

const CommunityComponent = () => (
    <div className={styles.page}>
        <JoinUsComponent />
        <Members />
    </div>
);

export default CommunityComponent;
