import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetails from './EventDetails';
import EventMedia from './EventMedia';
import { fetchAll } from './FetchFunctions';
import EditButton from './EditButton';
import styles from './Event.module.css';

class EventParty extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = () => {
        const id = window.location.href.split('?')[1];
        this.setState({
            complexId: `P${id}`,
        });
        fetchAll(`parties/${id}`).then((myJson) => {
            this.setState({ details: myJson });
            const { dance_course_id } = myJson;
            this.fetchDanceCourse(dance_course_id);
        });
    }

    fetchDanceCourse = (id) => {
        if (id) {
            fetchAll(`dance_courses/${id}`).then((myJson) => {
                this.setState({ dance_course: myJson });
                const { dance_id, dance_teacher_id } = myJson;
                this.fetchDance(dance_id);
                this.fetchTeacher(dance_teacher_id);
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

    fetchTeacher = (id) => {
        if (id) {
            fetchAll(`dance_teachers/${id}`).then((myJson) => {
                this.setState({ teacher: myJson });
            });
        }
    }

    render() {
        const {
            details, complexId, dance_course, dance, teacher,
        } = this.state;
        if (!details) return null;
        const main = {
            title: details.title,
            date: details.start_date,
            content: details.content,
            photo: details.photo,
        };

        let danceCourseString = '';
        let teacherName = '';
        if (dance_course && dance && teacher) {
            danceCourseString = `${dance.name} (${dance_course.level}) ${dance_course.length}`;
            teacherName = teacher.name;
        }


        const detail = {
            program: details.program,
            djs: details.djs,
            bands: details.bands,
            dance: details.dance,
            facebook: details.facebook_event,
            dance_course: danceCourseString,
            teacher_name: teacherName,
            teacher_link: teacher ? teacher.url : '',
            dance_id: dance ? dance.dance_type.id : null,
        };

        const media = {
            photos: details.spot,
            video: details.bss,
        };
        return (
            <div>
                <EditButton link={`/edit-events?${complexId}`} />
                <div className={styles.main}>
                    <EventWithPoster {...main} key="poster" />
                    <EventDetails {...detail} key="details" />
                    <EventMedia {...media} key="media" />
                </div>
            </div>
        );
    }
}

export default EventParty;
