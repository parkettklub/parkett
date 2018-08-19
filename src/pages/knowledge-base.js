import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import TipsAndTricks from '../components/TipsAnTricks.jsx';
import LocationAccess from '../components/LocationAccess.jsx';
import Attention from '../components/Attention.jsx';
import Services from '../components/Services.jsx';
import Dances from '../components/Dances.jsx';


const KnowledgeBase = () => (

    <div>
        <Header knowledgebase />
        <div className="pagecenter">
            <h1 style={{ marginTop: `6rem` }} ></h1>
            <Dances />
            <LocationAccess />
            <Attention />
            <Services />
            <TipsAndTricks />
        </div>
    </div>
)

export default KnowledgeBase;