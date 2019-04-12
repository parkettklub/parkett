import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogo from './facebook-app-logo.svg';
import DanceFigure from './DanceFigure';
import styles from './EventDetails.module.css';

function EventDetailsWorkshop({
    facebook, program, dance_id, theme = '-',
}) {
    const links = [];
    if (facebook) {
        links.push(
            <a className={styles.facebook} href={FacebookLogo} target="_blank" rel="noopener noreferrer" key="facebook">
                <img src={FacebookLogo} alt="" />
            </a>,
        );
    }
    return (
        <div className={styles.main}>
            <div className={styles.fullProgram}>
                <div className={styles.title}>Program</div>
                <div className={styles.program}>{program}</div>
            </div>
            <div>
                <DanceFigure danceId={dance_id} />
            </div>
            <div>
                <div className="theme">
                    <strong>Tematika:  </strong>
                    {theme}
                </div>
            </div>
            <div>
                {links}
            </div>
        </div>

    );
}

EventDetailsWorkshop.propTypes = {
    theme: PropTypes.string,
    dance_id: PropTypes.number,
    program: PropTypes.string,
    facebook: PropTypes.string,
};

EventDetailsWorkshop.defaultProps = {
    theme: '',
    dance_id: null,
    program: '',
    facebook: '',
};

export default EventDetailsWorkshop;
