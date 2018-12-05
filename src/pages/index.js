import React from 'react';
import '../components/Card.css';
import HeaderMax from '../components/HeaderMax.jsx';
import EventWithPoster from '../components/EventWithPoster';
import Actual from '../components/osszesitoActual.jpg';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          id: 11,
          title: "Salsa Party",
          poster: Actual,
          startDate: "2018-10-02 18:00",
        },
        {
          id: 12,
          title: "Kizomba Party",
          poster: Actual,
          startDate: "2018-10-16 18:00",
        },
        {
          id: 13,
          title: "Élőzenés Magyar Táncház",
          poster: Actual,
          startDate: "2018-10-23 18:00",
        },
        {
          id: 14,
          title: "Bachata Workshop",
          poster: Actual,
          startDate: "2018-10-28 18:00",
        },
        {
          id: 15,
          title: "Salsa és Bachata Party",
          poster: Actual,
          startDate: "2018-11-06 18:00",
        },
        {
          id: 16,
          title: "Élőzenés Rock'n'Roll Party",
          poster: Actual,
          startDate: "2018-11-20 18:00",
        }],
      i: 1
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
    if (this.state.i < this.state.events.length - 1)
      this.setState({ i: this.state.i + 1 });
    else this.setState({ i: 0 });
  }

  render() {
    let i = this.state.i;
    let main = {
      title: this.state.events[i].title,
      date: this.state.events[i].startDate,
      poster: this.state.events[i].poster
    }

    return (
      <div className="indexpage">
        <HeaderMax />
        <div className="pagecenter mainAttraction" style={{
          animationName: 'myTransform',
          animationIterationCount: 'infinite',
          animationDuration: 5 + 's'
        }} >
          <h1 style={{ marginTop: `17rem` }} ></h1>
          <EventWithPoster {...main} />
        </div>
      </div>
    )
  }
}

export default IndexPage
