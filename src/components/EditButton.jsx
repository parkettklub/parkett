import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Edit from './pencil_white.svg';
import styles from './EditButton.module.css';
import { isEditor } from '../utils/login';


const EditButton = ({ link }) => {
    if (isEditor()) {
        return (
            <Link
                className={styles.button}
                to={link}
            >
                <img src={Edit} alt="" />
            </Link>
        );
    }
    return null;
};

EditButton.propTypes = {
    link: PropTypes.string,
};

EditButton.defaultProps = {
    link: '/edit-events',
};

export default EditButton;
