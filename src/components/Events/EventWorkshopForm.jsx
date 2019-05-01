import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './EventForm.module.css';
import texts from '../../utils/Descriptions';

class EventWorkshopForm extends React.Component {
    state = {};

    componentDidMount() {
        const { dance_teacher_id } = this.props;
        if (dance_teacher_id) this.fetchObject(dance_teacher_id);
    }

    fetchObject = (id) => {
        if (id) {
            fetchAll(`dance_teachers/${id}`).then((selectedObject) => {
                this.setState({ ...selectedObject });
            });
        }
    }

    render() {
        const { party_id, link, dance_teacher_id } = this.props;
        const { name, url } = this.state;
        const rows = [];
        if (party_id) {
            rows.push(
                <div className="eventdetail-paragraph">
                    {texts.eventdesc.wokshopparty[0]}
                    <strong>{party_id}</strong>
                    {texts.eventdesc.wokshopparty[1]}
                    <strong>{party_id}</strong>
                    {texts.eventdesc.wokshopparty[2]}
                </div>,
            );
        }

        return (
            <div className={styles.main}>
                <div className={styles.paragraph}>
                    <strong>{texts.eventdesc.form.title}</strong>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {texts.eventdesc.form.link}
                    </a>
                </div>
                <div className={styles.paragraph}>
                    {texts.eventdesc.form.paragraph}
                </div>
                <div className={styles.paragraph} hidden={dance_teacher_id == null}>
                    {texts.eventdesc.form.teaching[0]}
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                    {texts.eventdesc.form.teaching[1]}
                </div>
                {rows}
            </div>
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
