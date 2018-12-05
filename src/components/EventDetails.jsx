import React from 'react';
import PropTypes from 'prop-types';
import DanceFigure from './DanceFigure';
import FacebookLogo from './facebook-app-logo.svg';
import Card from './Card';
import styles from './EventDetails.module.css';

function EventDetails({
    bands, djs, facebook, program, dance,
}) {
    const music = [];
    bands.forEach(
        (band) => {
            music.push(
                <div>
                    <a href={band.url}>{band.name}</a>
                </div>,
            );
        },
    );
    djs.forEach(
        (dj) => {
            music.push(
                <div>
                    <a href={dj.url}>{dj.name}</a>
                </div>,
            );
        },
    );


    const links = [];
    if (facebook) {
        links.push(
            <div>
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
                    <DanceFigure dance={dance} />
                    {links}
                </div>
                <div className={styles.music}>
                    <strong>Zenét szongáltatja:  </strong>
                    {music}
                </div>
            </div>
        </Card>
    );
}

EventDetails.propTypes = {
    bands: PropTypes.instanceOf(Array).isRequired,
    djs: PropTypes.instanceOf(Array).isRequired,
    dance: PropTypes.instanceOf(Object).isRequired,
    program: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
};

export default EventDetails;
