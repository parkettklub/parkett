import React from 'react';
import PropTypes from 'prop-types';
import Edit from './pencil_white.svg';
import styles from './EditButton.module.css';


function editPage(location) {
    window.location = location;
}

const EditButton = ({ link }) => (
    <div
        className={styles.button}
        onClick={() => editPage(link)}
        role="button"
        onKeyDown={() => { }}
        tabIndex={0}
    >
        <img src={Edit} alt="" />
    </div>
);

EditButton.propTypes = {
    link: PropTypes.string,
};

EditButton.defaultProps = {
    link: '/edit-events',
};

export default EditButton;
