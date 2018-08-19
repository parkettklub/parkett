import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import TipsAndTricks from '../components/TipsAnTricks.jsx';
import LocationAccess from '../components/LocationAccess.jsx';
import Attention from '../components/Attention.jsx';
import Services from '../components/Services.jsx';
import Dances from '../components/Dances.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';


const KnowledgeBase = () => (

    <div>
        <Header knowledgebase />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <h1 style={{ marginTop: `6rem` }} ></h1>
                <Dances />
                <LocationAccess />
                <Attention />
                <Services />
                <TipsAndTricks />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default KnowledgeBase;