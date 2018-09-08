import React from 'react'
import Card from './Card';
import styles from './SocialFeed.module.css'

class SocialFeed extends React.Component {

  fetchInstaPhotos() {

    var Instafeed = require("instafeed.js");

    const feed = new Instafeed({
      get: 'tagged',
      tagName: 'legjobbcsapat',
      clientId: '87676418335280014999',
      accessToken: '452551435.528baf9.7214f2b42088402e80f3467c4d89901b',
      resolution: "low_resolution",
      template: `<a href="{{link}}"><img class=${styles.photo} src="{{image}}" /></a>`
    });
    feed.run();

    console.log("asd");
  };

  componentDidMount() {
    this.fetchInstaPhotos();
  }

  render() {
    return (
      <Card title="@parkettklub">
        <div id="instafeed" className={styles.instafeed}></div>
      </Card>
    );
  }
}

export default SocialFeed;