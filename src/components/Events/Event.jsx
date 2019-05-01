import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styles from './EventList.module.css';
import { fetchAll } from '../../utils/FetchFunctions';
import { dateToString } from '../../utils/DateFunctions';
import texts from '../../utils/Descriptions';

class EventSummary extends React.Component {
    state = {};

    componentDidMount() {
        const { dance_course_id, dance_id } = this.props;
        if (dance_course_id) this.fetchDanceCourse(dance_course_id);
        if (dance_id) this.fetchDance(dance_id);
    }

    fetchDanceCourse = (id) => {
        if (id) {
            fetchAll(`dance_courses/${id}`).then((myJson) => {
                const { dance_id } = myJson;
                this.fetchDance(dance_id);
            });
        }
    }

    fetchDance = (id) => {
        if (id) {
            fetchAll(`dances/${id}`).then((myJson) => {
                this.setState({ dance: myJson });
            });
        }
    }

    render() {
        const {
            formlink, music, start_date, id, onClick, photo, title, old,
        } = this.props;
        const { dance } = this.state;
        const detailsrows = [];
        if (formlink) {
            detailsrows.push(
                <div key="form">
                    <a
                        href={formlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        key="FormLink"
                        onClick={(event) => { event.stopPropagation(); }}
                    >
                        {texts.eventdesc.form.link}
                    </a>
                </div>,
            );
        }

        if (music) {
            detailsrows.push(
                <div key="music"><strong>{music}</strong></div>,
            );
        }

        let realColor = '#505050';
        let icon = '';
        if (dance) {
            realColor = dance.dance_type.color;
            icon = dance.dance_type.image;
        }

        return (
            <div
                className={`${styles.event} ${old ? styles.old : ''} ${onClick ? styles.clickable : ''}`}
                key={id}
                onClick={onClick}
                role="button"
                onKeyDown={() => { }}
                tabIndex={0}
            >
                <Card color={realColor}>
                    <div className={styles.grid}>
                        <div className={styles.posterCropper}>
                            <img alt="" src={photo} />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.title}>{title}</div>
                            <div>{dateToString(start_date)}</div>
                            {detailsrows}
                        </div>
                        <div className={styles.dance}>
                            <img src={icon} alt="" />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

EventSummary.propTypes = {
    formlink: PropTypes.string,
    music: PropTypes.string,
    start_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    photo: PropTypes.string,
    title: PropTypes.string,
    old: PropTypes.bool,
    dance_course_id: PropTypes.number,
    dance_id: PropTypes.number,
};

EventSummary.defaultProps = {
    formlink: '',
    music: '',
    photo: '',
    title: '',
    old: false,
    dance_course_id: null,
    dance_id: null,
};

export default EventSummary;
