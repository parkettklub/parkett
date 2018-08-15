import React from 'react'
import Header from '../components/Header.jsx';
import EditKnowledgeMain from '../components/EditKnowledgeMain.jsx';

const EventKnowledgeBase = () => (

    <div>
        <Header />
        <div className="pagecenter">
            <h1 style={{ marginTop: `5rem` }} ></h1>
            <EditKnowledgeMain />
        </div>
    </div>
)

export default EventKnowledgeBase