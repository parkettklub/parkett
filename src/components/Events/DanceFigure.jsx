import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './EventDetails.module.css';

class DanceFigure extends React.Component {
    state = {};

    componentDidMount() {
        const { id, danceId } = this.props;
        if (id) this.fetchObject(id);
        if (danceId) this.fetchDance(danceId);
    }

    componentWillReceiveProps({ id, danceId }) {
        if (id) this.fetchObject(id);
        if (danceId) this.fetchDance(danceId);
    }

    fetchObject = (id) => {
        if (id) {
            fetchAll(`dance_types/${id}`).then((selectedObject) => {
                this.setState({ ...selectedObject, src: selectedObject.image });
            });
        }
    }

    fetchDance = (id) => {
        if (id) {
            fetchAll(`dances/${id}`).then((selectedObject) => {
                this.setState({ ...selectedObject, src: selectedObject.dance_type.image });
            });
        }
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
    danceId: PropTypes.number,
};

DanceFigure.defaultProps = {
    id: null,
    danceId: null,
};


export default DanceFigure;
