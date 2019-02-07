import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import HeaderMax from '../components/HeaderMax';
import JoinUsSimple from '../components/JoinUsSimple';
import MainEvents from '../components/MainEvents';
import styles from './Page.module.css';
import './Animation.css';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      i: 1,
    };
  }

  render() {
    return (
      <ReactCssTransitionGroup
        transitionName="fade"
        transitionAppearTimeout={1000}
        transitionEnterTimeout={500}
        transitionAppear
        transitionLeaveTimeout={500}
      >
        <HeaderMax />
        <div
          className={styles.home}
        >
          <div>
            <div>
              <JoinUsSimple />
            </div>
            <MainEvents />
          </div>
        </div>
      </ReactCssTransitionGroup>
    );
  }
}

export default IndexPage;
