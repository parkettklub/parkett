import React from 'react';
import PropTypes from 'prop-types';
import DanceFigure from './DanceFigure';
import FacebookLogo from './facebook-app-logo.svg';
import Card from './Card';
import styles from './EventDetails.module.css';

function EventDetails({
    bands, djs, facebook, program, dance_id, dance_course,
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
    return (
        <Card>
            <div className={styles.main}>
                <div className={styles.fullProgram}>
                    <div className={styles.title}>Program</div>
                    <div className={styles.program}>{program}</div>
                </div>
                <div className={styles.links}>
                    <DanceFigure id={dance_id} />
                    {links}
                </div>
                <div>
                    {dance_course}
                </div>
                <div />
                <div className={styles.music}>
                    <strong>{(bands.lenght > 0 || djs.lenght > 0) ? 'Zenét szongáltatja:  ' : ''}</strong>
                    {bands
                        ? bands.map(band => (
                            <div>
                                <a href={band.url}>{band.name}</a>
                            </div>
                        ))
                        : null
                    }
                    {djs
                        ? djs.map(dj => (
                            <div>
                                <a href={dj.url}>{dj.name}</a>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        </Card>
    );
}

EventDetails.propTypes = {
    bands: PropTypes.instanceOf(Array),
    djs: PropTypes.instanceOf(Array),
    dance_id: PropTypes.number,
    program: PropTypes.string,
    dance_course: PropTypes.string,
    facebook: PropTypes.string.isRequired,
};

EventDetails.defaultProps = {
    bands: [],
    djs: [],
    dance_id: null,
    program: '',
    dance_course: '',
};

export default EventDetails;
