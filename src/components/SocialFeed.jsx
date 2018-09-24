import React from 'react'
import Card from './Card';
import styles from './SocialFeed.module.css'
import SquareImage from './SquareImage';

class SocialFeed extends React.Component {

  accessToken = '452551435.528baf9.7214f2b42088402e80f3467c4d89901b';
  tag = "legjobbcsapat";
  state = {
    photos: null,
    resizeImages: true
  };
  handleResize = this.handleResize.bind(this);

  fetchInstaPhotos() {

    fetch(`https://api.instagram.com/v1/tags/${this.tag}/media/recent?access_token=${this.accessToken}`).then(response =>
      response.json()).then(data => {
        this.setState({ photos: data.data })
        console.log(this.state.photos);
      }
      )
  };

  photoElements(photos) {
    return photos.map((datum, i) => {
      return <a key={this.state.resizeImages.toString() + datum.id} href={datum.link}>
        <SquareImage resize={this.state.resizeImages} location={datum.images.standard_resolution.url} />
      </a>
    })
  }


  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ resizeImages: !this.state.resizeImages });
  }

  render() {

    if (!this.state.photos) this.fetchInstaPhotos();

    console.log("feed rendered")

    return (
      <Card title="@parkettklub">
        <div id="instafeed" className={styles.instafeed}>
          {this.state.photos ? this.photoElements(this.state.photos) : "Loading"}
        </div>
      </Card>
    );
  }
}

export default SocialFeed;