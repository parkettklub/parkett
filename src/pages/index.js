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
      partyDetails: {
        id: 1,
        title: "Élőzenés Salsa Party: Cuba",
        photo: Plakat01,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        facebook_event: "https://www.facebook.com/events/1598719006921910/"
      }
    }
  }

  render() {
    const date = this.state.partyDetails.start_date;
    const dateString = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();
    let main = {
      title: this.state.partyDetails.title,
      date: dateString,
      description: this.state.partyDetails.content,
      poster: this.state.partyDetails.photo
    }

    return (
      <div className="indexpage">
        <HeaderMax />

        <ReactCssTransitionGroup
          transitionName="fade"
          transitionAppearTimeout={1000}
          transitionEnterTimeout={300}
          transitionAppear={true}
          transitionLeaveTimeout={300}>
          <div className="pagecenter">
            <h1 style={{ marginTop: `14rem` }} ></h1>
            <EventWithPoster details={main} />
          </div>
        </ReactCssTransitionGroup>
      </div>
    )
  }
}

export default IndexPage
