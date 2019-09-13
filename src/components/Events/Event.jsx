import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Card from '../Card';
import styles from './EventList.module.css';
import { fetchAll } from '../../utils/FetchFunctions';
import { dateToString } from '../../utils/DateFunctions';
import texts from '../../utils/Descriptions';

class EventSummary extends React.Component {
    state = {};

    componentDidMount() {
        const { dance_type_id } = this.props;
        if (dance_type_id) this.fetchDanceTypes(dance_type_id);
    }


    fetchDanceTypes = (id) => {
        if (id) {
            fetchAll(`dance_types/${id}`).then((myJson) => {
                this.setState({ dance_type: myJson });
            });
        }
    }

    render() {
        const {
            formlink, music, start_date, id, onClick, photo, title, old, path,
        } = this.props;
        const { dance_type } = this.state;
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
        if (dance_type) {
            realColor = dance_type.color;
            icon = dance_type.image;
        }

        return (
            <div
                className={`${styles.event} ${old ? styles.old : ''} ${onClick ? styles.clickable : ''}`}
                key={id}
                role="button"
                onKeyDown={() => { }}
                tabIndex={0}
            >
                <Card color={realColor}>
                    <Link to={path}>
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
                    </Link>
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
    path: PropTypes.string.isRequired,
    dance_type_id: PropTypes.number,
};

EventSummary.defaultProps = {
    formlink: '',
    music: '',
    photo: '',
    title: '',
    old: false,
    dance_type_id: null,
};

export default EventSummary;
