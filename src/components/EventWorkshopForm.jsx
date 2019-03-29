import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import Card from './Card';
import styles from './EventForm.module.css';

class EventWorkshopForm extends React.Component {
    state = {};

    componentDidMount() {
        const { dance_teacher_id } = this.props;
        if (dance_teacher_id) this.fetchObject(dance_teacher_id);
    }

    fetchObject = (id) => {
        fetchAll(`dance_teachers/${id}`).then((selectedObject) => {
            this.setState({ ...selectedObject });
        });
    }

    render() {
        const { party_id, link, dance_teacher_id } = this.props;
        const { name, url } = this.state;
        const rows = [];
        if (party_id) {
            rows.push(
                <div className="eventdetail-paragraph">
                    {'A workshop résztvevői ingyenesen részt vehetnek a '}
                    <strong>{party_id}</strong>
                    {' nevű rendezvényen amely '}
                    <strong>{party_id}</strong>
                    {' estéjén lesz megrendezve '}
                </div>,
            );
        }

        return (
            <Card>
                <div className={styles.main}>
                    <div className={styles.paragraph}>
                        <strong>JELENTKEZNI az alábbi linken lehet:  </strong>
                        <a href={link} target="_blank" rel="noopener noreferrer">Link a formhoz</a>
                    </div>
                    <div className={styles.paragraph}>
                        {'Siess, a helyek limitáltak! Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. A workshop csak elegendő számú jelentkező esetén indul.'}
                    </div>
                    <div className={styles.paragraph} hidden={dance_teacher_id == null}>
                        {'A tánccal '}
                        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                        {' fognak megismertetni'}
                    </div>
                    {rows}
                </div>
            </Card>
        );
    }
}

EventWorkshopForm.propTypes = {
    party_id: PropTypes.number,
    link: PropTypes.string,
    dance_teacher_id: PropTypes.number,
};

EventWorkshopForm.defaultProps = {
    party_id: null,
    link: '',
    dance_teacher_id: null,
};

export default EventWorkshopForm;
