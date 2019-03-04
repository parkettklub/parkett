import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import styles from './EventDetails.module.css';

class DanceFigure extends React.Component {
    state = {};

    componentDidMount() {
        const { id } = this.props;
        if (id) this.fetchObject(id);
    }

    componentWillReceiveProps({ id }) {
        if (id) this.fetchObject(id);
    }

    fetchObject = (id) => {
        fetchAll(`dance_types/${id}`).then((selectedObject) => {
                this.setState({ ...selectedObject, src: selectedObject.image });
            });
    }

    render() {
        const { src } = this.state;
        return (
            <div className={styles.danceFigure}>
                <img src={src} alt="" />
            </div>
        );
    }
}

DanceFigure.propTypes = {
    id: PropTypes.number,
};

DanceFigure.defaultProps = {
    id: null,
};


export default DanceFigure;
