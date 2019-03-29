import React from 'react';
import styles from './SocialFeed.module.css';

class SquareImage extends React.Component {
    constructor(props) {
        super(props);
        this.img = React.createRef();
        this.updateSize = this.updateSize.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this.updateSize();
    }

    componentWillReceiveProps(props) {
        const { resize } = props;
        if (this.props.resize !== resize) {
            this.updateSize();
        }
    }

    updateSize() {
        if (this.img.current.offsetHeight !== this.img.current.offsetWidth) {
            this.setState({ height: this.img.current.offsetWidth });
        }
    }

    render() {
        const { height } = this.state;
        const { location } = this.props;
        const attr = height ? { style: { height } } : null;
        return (
            <div>
                <img className={styles.photo} ref={this.img} {...attr} src={location} alt="" />
            </div>
        );
    }
}

export default SquareImage;
