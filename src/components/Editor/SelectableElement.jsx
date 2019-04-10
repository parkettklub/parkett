import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.module.css';
import { dateToShortString } from '../DateFunctions';

function SelectableElement({
    title, start_date, onClick, selected, published_at,
}) {
    return (
        <button
            className={selected ? styles.selectedline : styles.selectable}
            onClick={onClick}
            tabIndex={0}
            onKeyDown={() => { }}
            type="button"
        >
            {`${dateToShortString(start_date)}${dateToShortString(published_at)} : ${title}`}
        </button>
    );
}

SelectableElement.propTypes = {
    title: PropTypes.string,
    start_date: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    published_at: PropTypes.string,
};

SelectableElement.defaultProps = {
    start_date: '',
    title: '',
    selected: false,
    published_at: '',
};

export default SelectableElement;
