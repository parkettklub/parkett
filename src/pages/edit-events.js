import React from 'react';
import EditEvents from '../components/EditEvents';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Editevents = () => (

    <div>
        <Header editevents />

        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <h1 style={{ marginTop: `6rem` }} ></h1>
                <EditEvents />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default Editevents;