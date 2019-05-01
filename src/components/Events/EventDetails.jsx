import React from 'react';
import PropTypes from 'prop-types';
import DanceFigure from './DanceFigure';
import FacebookLogo from './facebook-app-logo.svg';
import styles from './EventDetails.module.css';
import texts from '../../utils/Descriptions';

function EventDetails({
    bands, djs, facebook, program, dance_id, dance_course, teacher_link, teacher_name,
}) {
    const links = [];
    if (facebook) {
        links.push(
            <div key="facebook">
                <a className={styles.facebook} href={facebook} target="_blank" rel="noopener noreferrer">
                    <img
                        className="eventdetail-facebook-logo"
                        src={FacebookLogo}
                        alt=""
                    />
                </a>
            </div>,
        );
    }
    const danceCourse = [];
    if (dance_course) {
        danceCourse.push(
            <div>
                {'Tánctanítás: '}
                <a href={teacher_link} target="_blank" rel="noopener noreferrer">{teacher_name}</a>
                {` : ${dance_course}`}
            </div>,
        );
    }
    return (
        <div className={styles.main}>
            <div className={styles.fullProgram}>
                <div className={styles.title}>Program</div>
                <div className={styles.program}>{program}</div>
            </div>
            <div className={styles.links}>
                <DanceFigure id={dance_id} />
            </div>
            <div>
                {danceCourse}
            </div>
            <div>
                {links}
            </div>
            <div className={styles.music}>
                <strong>{(bands.length > 0 || djs.length > 0) ? texts.eventdesc.music : ''}</strong>
                {bands
                    ? bands.map(band => (
                        <div>
                            {band.url
                                ? (<a href={band.url} target="_blank" rel="noopener noreferrer">{band.name}</a>)
                                : (band.name)}

                        </div>
                    ))
                    : null
                }
                {djs
                    ? djs.map(dj => (
                        <div>
                            {dj.content
                                ? (<a href={dj.content} target="_blank" rel="noopener noreferrer">{dj.name}</a>)
                                : (dj.name)
                            }
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
}

EventDetails.propTypes = {
    bands: PropTypes.instanceOf(Array),
    djs: PropTypes.instanceOf(Array),
    dance_id: PropTypes.number,
    program: PropTypes.string,
    dance_course: PropTypes.string,
    teacher_link: PropTypes.string,
    facebook: PropTypes.string.isRequired,
    teacher_name: PropTypes.string,
};

EventDetails.defaultProps = {
    bands: [],
    djs: [],
    dance_id: null,
    program: '',
    dance_course: '',
    teacher_link: '',
    teacher_name: '',
};

export default EventDetails;
