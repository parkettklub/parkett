import React from 'react';
import styles from './Community.module.css';
import SquareImage from './SquareImage';

class SocialFeed extends React.Component {
  accessToken = '452551435.528baf9.7214f2b42088402e80f3467c4d89901b';
  tag = "legjobbcsapat";
  state = {
    photos: null,
    resizeImages: true
  };
  handleResize = this.handleResize.bind(this);

  /*fetchInstaPhotos() {
    console.log('fetch');
    async fetch(`https://api.instagram.com/v1/tags/${this.tag}/media/recent?access_token=${this.accessToken}`).then(response =>
      response.json()).then(data => {
        this.setState({ photos: data.data })
        console.log(this.state.photos);
      }
      )
  };*/

  photoElements(photos) {
    return photos.map((datum, i) => (
      <a key={this.state.resizeImages.toString() + datum.id} href={datum.link}>
        <div className={styles.element}>
          <SquareImage resize={this.state.resizeImages} location={datum.images.standard_resolution.url} />
          <div className={styles.caption}>{photos[i].caption.text}</div>
        </div>
      </a>
    ));
  }


  Loading() {
    return (
      <div className={styles.loading}>
        Loading
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    //if (!this.state.photos) this.fetchInstaPhotos();
  }

  handleResize() {
    this.setState({ resizeImages: !this.state.resizeImages });
  }

  render() {
    console.log("feed rendered");
    return (
      <div className={styles.instagram}>
        {this.state.photos ? this.photoElements(this.state.photos) : this.Loading()}
      </div>
    );
  }
}

export default SocialFeed;
