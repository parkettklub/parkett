import React from 'react'
import styles from './SocialFeed.module.css'

class SquareImage extends React.Component {

    constructor(props){
        super(props)
        this.img = React.createRef()
        this.updateSize = this.updateSize.bind(this);
        this.state = {}
      }

    render(){

        const attr = this.state.height ? {style : { height: this.state.height }} : null;

        console.log("img rendered");

        return <img className={styles.photo} ref={this.img} {...attr} src={this.props.location}/>
    }

    updateSize(){
        if (this.img.current.offsetHeight !== this.img.current.offsetWidth) this.setState({height: this.img.current.offsetWidth})
        console.log(this.img.current.offsetWidth);
    }

    componentDidMount(){
        this.updateSize();
        console.log("img did mount")
    }

    componentWillReceiveProps(props) {
        const { resize, location } = this.props;
        if (this.props.resize !== resize) {
          this.updateSize();
        }
      }
}

export default SquareImage;