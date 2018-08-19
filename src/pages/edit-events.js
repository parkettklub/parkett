import React from 'react';
import EditEvents from '../components/EditEvents';
import '../components/Card.css';
import Header from '../components/Header.jsx';

const Editevents = () => (

    <div>
        <Header editevents />
        <div className="pagecenter">
            <h1 style={{ marginTop: `6rem` }} ></h1>
            <EditEvents />
        </div>
    </div>
)

export default Editevents;