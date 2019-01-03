import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogo from './facebook-app-logo.svg';
import DanceFigure from './DanceFigure';
import Card from './Card';
import styles from './EventDetails.module.css';

function EventDetailsWorkshop({
    facebook, program, dance, theme = '-',
}) {
    const links = [];
    if (facebook) {
        links.push(
            <a className={styles.facebook} href={FacebookLogo} target="_blank" rel="noopener noreferrer">
                <img src={FacebookLogo} alt="" />
            </a>,
        );
    }
    return (
        <Card>
            <div className={styles.main}>
                <div className={styles.fullProgram}>
                    <div className={styles.title}>Program</div>
                    <div className={styles.program}>{program}</div>
                </div>
                <div>
                    <DanceFigure dance={dance} />
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
        </Card>

    );
}

EventDetailsWorkshop.propTypes = {
    theme: PropTypes.string.isRequired,
    dance: PropTypes.instanceOf(Object).isRequired,
    program: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
};

export default EventDetailsWorkshop;
