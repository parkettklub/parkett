import React from 'react';
import TipsAndTricks from './TipsAnTricks';
import LocationAccess from './LocationAccess';
import Attention from './Attention';
import Services from './Services';
import Dances from './Dances';
import EditButton from './EditButton';
import styles from '../pages/Page.module.css';

const KnowledgeBaseComponent = () => (
    <div className={styles.knwoledge}>
        <div>
            <EditButton />
        </div>
        <Dances />
        <LocationAccess />
        <Attention />
        <Services />
        <TipsAndTricks />
    </div>
);

export default KnowledgeBaseComponent;
