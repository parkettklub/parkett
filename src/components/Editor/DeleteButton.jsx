import React from 'react';
import PropTypes from 'prop-types';
import { fetchDelete } from '../../utils/FetchFunctions';
import styles from './Form.module.css';
import Delete from './remove.svg';

const DeletButton = ({ type, id, fetchFunction }) => (
    <div className={styles.main} hidden={id === -1}>
        <button className={styles.delete} onClick={() => fetchDelete(type, id).then(() => fetchFunction())} type="button">
            <img src={Delete} alt="" />
        </button>
    </div>
);

DeletButton.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    fetchFunction: PropTypes.func.isRequired,
};

DeletButton.defaultProps = {
};

export default DeletButton;
