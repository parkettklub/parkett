import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetails from './EventDetails';
import EventMedia from './EventMedia';
import { fetchAll } from './FetchFunctions';
import EditButton from './EditButton';

class EventParty extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = async () => {
        const id = window.location.href.split('?')[1];
        this.setState({
            complexId: `P${id}`,
        });
        const myJson = await fetchAll(`parties/${id}`);
        this.setState({ details: myJson });
        const { dance_course_id } = myJson;
        this.fetchDanceCourse(dance_course_id);
    }

    fetchDanceCourse = async (id) => {
        const myJson = await fetchAll(`dance_courses/${id}`);
        this.setState({ dance_course: myJson });
        const { dance_id, dance_teacher_id } = myJson;
        this.fetchDance(dance_id);
        this.fetchTeacher(dance_teacher_id);
    }

    fetchDance = async (id) => {
        const myJson = await fetchAll(`dances/${id}`);
        this.setState({ dance: myJson });
    }

    fetchTeacher = async (id) => {
        const myJson = await fetchAll(`dance_teachers/${id}`);
        this.setState({ teacher: myJson });
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
        if (dance_course && dance && teacher) {
            danceCourseString = `Tánctanítás: ${teacher.name} : ${dance.name} (${dance_course.level}) ${dance_course.length}`;
        }


        const detail = {
            program: details.program,
            djs: details.djs,
            bands: details.bands,
            dance: details.dance,
            facebook: details.facebook_event,
            dance_course: danceCourseString,
            dance_id: dance ? dance.dance_type.id : null,
        };

        const media = {
            photos: details.spot,
            video: details.bss,
        };
        return (
            <div>
                <EditButton link={`/edit-events?${complexId}`} />
                <EventWithPoster {...main} key="poster" />
                <EventDetails {...detail} key="details" />
                <EventMedia {...media} key="media" />
            </div>
        );
    }
}

export default EventParty;
