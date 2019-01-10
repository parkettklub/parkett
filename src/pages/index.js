import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import HeaderMax from '../components/HeaderMax.jsx';
import JoinUsComponent from '../components/JoinUsComponent.jsx';
import EventWithPoster from '../components/EventWithPoster';
import Actual from '../components/osszesitoActual.jpg';
import styles from './Page.module.css';
import './Animation.css';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 11,
          title: 'Salsa Party',
          poster: Actual,
          startDate: '2018-10-02 18:00',
        },
        {
          id: 12,
          title: 'Kizomba Party',
          poster: Actual,
          startDate: '2018-10-16 18:00',
        },
        {
          id: 13,
          title: 'Élőzenés Magyar Táncház',
          poster: Actual,
          startDate: '2018-10-23 18:00',
        },
        {
          id: 14,
          title: 'Bachata Workshop',
          poster: Actual,
          startDate: '2018-10-28 18:00',
        },
        {
          id: 15,
          title: 'Salsa és Bachata Party',
          poster: Actual,
          startDate: '2018-11-06 18:00',
        },
        {
          id: 16,
          title: "Élőzenés Rock'n'Roll Party",
          poster: Actual,
          startDate: '2018-11-20 18:00',
        }],
      i: 1,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000 * 5);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const { i, events } = this.state;
    if (i < events.length - 1) this.setState({ i: i + 1 });
    else this.setState({ i: 0 });
  }

  render() {
    const { i, events } = this.state;
    const main = {
      title: events[i].title,
      date: events[i].startDate,
      poster: events[i].poster,
    };
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
          <JoinUsComponent />
          <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <EventWithPoster {...main} key={i} />
          </ReactCssTransitionGroup>
        </div>
      </ReactCssTransitionGroup>
    );
  }
}

export default IndexPage;
