import React from 'react';
import styles from './Community.module.css';
import SocialFeed from './SocialFeed';
import Members from './Members';

const CommunityComponent = () => (
    <div className={styles.main}>
        {/* <SocialFeed /> */}
        <Members />
    </div>);

export default CommunityComponent;
