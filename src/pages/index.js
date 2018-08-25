import React from 'react';
import '../components/Card.css';
import HeaderMax from '../components/HeaderMax.jsx';
import EventWithPoster from '../components/EventWithPoster';
import Plakat01 from '../components/Plakat_vegleges.jpg';
import Plakat02 from '../components/Plakat.png';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [{
        id: 1,
        title: "Élőzenés Salsa Party: Cuba",
        photo: Plakat01,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        facebook_event: "https://www.facebook.com/events/1598719006921910/"
      }, {
        id: 2,
        title: "Élőzenés Salsa Party: Cuba",
        photo: Plakat02,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        facebook_event: "https://www.facebook.com/events/1598719006921910/"
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
    const date = this.state.events[i].start_date;
    const dateString = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();
    let main = {
      title: this.state.events[i].title,
      date: dateString,
      description: this.state.events[i].content,
      poster: this.state.events[i].photo
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
          <EventWithPoster details={main} />
        </div>
      </div>
    )
  }
}

export default IndexPage
