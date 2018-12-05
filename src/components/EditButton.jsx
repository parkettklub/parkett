import React from 'react';
import PropTypes from 'prop-types';
import Edit from './pencil_white.svg';
import styles from './EditButton.module.css';

const KnowledgeBaseComponent = ({ onClick }) => (
    <div
        className={styles.button}
        onClick={onClick}
        role="button"
        onKeyDown={() => { }}
        tabIndex={0}
    >
        <img src={Edit} alt="" />
    </div>
);


KnowledgeBaseComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default KnowledgeBaseComponent;
