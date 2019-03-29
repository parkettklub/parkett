import React from 'react';
import PropTypes from 'prop-types';
import { fetchDelete } from './FetchFunctions';
import styles from './Form.module.css';

const DeletButton = ({ type, id, fetchFunction }) => (
    <div className={styles.main} hidden={id === -1}>
        <button onClick={() => fetchDelete(type, id).then(() => fetchFunction())} type="button">DELET</button>
    </div>
);

DeletButton.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fetchFunction: PropTypes.func.isRequired,
};

DeletButton.defaultProps = {
};

export default DeletButton;
