import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function FormSelect({
    selected, title, label, onClick,
}) {
    return (
        <div
            className={selected === title ? styles.selected : ''}
            onClick={onClick}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {label}
        </div>
    );
}

FormSelect.propTypes = {
    selected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FormSelect;
