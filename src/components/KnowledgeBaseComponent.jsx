import React from 'react'
import './Knowledge-Base.css';
import Edit from './pencil_white.svg';
import TipsAndTricks from '../components/TipsAnTricks.jsx';
import LocationAccess from '../components/LocationAccess.jsx';
import Attention from '../components/Attention.jsx';
import Services from '../components/Services.jsx';
import Dances from '../components/Dances.jsx';

function editEventsPage() {
    window.location = "/edit-knowledge-base/";
}

const KnowledgeBaseComponent = props =>
    <div className="pagecenter">
        <div className="editButton" >
            <img src={Edit} onClick={editEventsPage} />
        </div>
        <Dances />
        <LocationAccess />
        <Attention />
        <Services />
        <TipsAndTricks />
    </div>

export default KnowledgeBaseComponent