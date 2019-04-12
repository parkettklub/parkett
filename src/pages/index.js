import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import Header from '../components/Header-Footer/Header';
import styles from './Page.module.css';
import HomePage from '../components/HomePage';
import './Animation.css';

const IndexPage = () => (
  <div>
    <Header />
    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={500}
      transitionAppear
      transitionLeaveTimeout={500}
    >
      <div className={styles.main}>
        <HomePage />
      </div>
    </ReactCssTransitionGroup>
  </div>
);

export default IndexPage;
