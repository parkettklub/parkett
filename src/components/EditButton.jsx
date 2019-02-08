import React from 'react';
import Edit from './pencil_white.svg';
import styles from './EditButton.module.css';


function editEventsPage() {
    window.location = '/edit-dance/';
}

const KnowledgeBaseComponent = () => (
    <div
        className={styles.button}
        onClick={editEventsPage}
        role="button"
        onKeyDown={() => { }}
        tabIndex={0}
    >
        <img src={Edit} alt="" />
    </div>
);

export default KnowledgeBaseComponent;
