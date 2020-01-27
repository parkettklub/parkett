import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function SubFormSelect({
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

SubFormSelect.propTypes = {
    selected: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

SubFormSelect.defaultProps = {
    selected: '',
    title: '',
    label: '',
};


export default SubFormSelect;
