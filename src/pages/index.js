import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import Header from '../components/Header';
import JoinUsSimple from '../components/JoinUsSimple';
import MainEvents from '../components/MainEvents';
import styles from './Page.module.css';
import HomePage from '../components/HomePage';
import './Animation.css';

const IndexPage = () => (
  <ReactCssTransitionGroup
    transitionName="fade"
    transitionAppearTimeout={1000}
    transitionEnterTimeout={500}
    transitionAppear
    transitionLeaveTimeout={500}
  >
    <Header />
    <div
      className={styles.main}
    >
      <HomePage />
    </div>
  </ReactCssTransitionGroup>
);

export default IndexPage;
