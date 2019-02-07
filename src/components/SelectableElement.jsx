import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.module.css';

function SelectableElement({
    title, startDate, onClick, selected,
}) {
    return (
        <div
            className={selected ? styles.selectedline : styles.selectable}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={() => { }}
        >
            {startDate}
            {title}
        </div>
    );
}

SelectableElement.propTypes = {
    title: PropTypes.string,
    startDate: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool,
};

SelectableElement.defaultProps = {
    startDate: '',
    title: '',
    selected: false,
}

export default SelectableElement;
