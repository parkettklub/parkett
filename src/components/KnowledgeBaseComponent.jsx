import React from 'react';
import TipsAndTricks from './TipsAnTricks';
import LocationAccess from './LocationAccess';
import Attention from './Attention';
import Services from './Services';
import Dances from './Dances';
import EditButton from './EditButton';

const KnowledgeBaseComponent = () => (
    <div>
        <EditButton />
        <Dances />
        <LocationAccess />
        <Attention />
        <Services />
        <TipsAndTricks />
    </div>
);

export default KnowledgeBaseComponent;
