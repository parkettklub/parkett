import React from 'react';
import './Editor.css';
import PlusEvent from './document.svg';

function newParty() {
    window.location = "/edit-party";
}

function newWorkshop() {
    window.location = "/edit-workshop/";
}

function newArticle() {
    window.location = "/edit-article/";
}

function EditEventsHeader() {
    return (
        <div>
            <div className="card withpadding" key="editEventList">
                <div className="addEvent grid">
                    <div onClick={newParty}>
                        <img src={PlusEvent} className="logo" />
                        <b>Új Esemény</b>
                    </div>
                    <div onClick={newWorkshop}>
                        <img src={PlusEvent} className="logo" />
                        <b>Új Workshop</b>
                    </div>
                    <div onClick={newArticle}>
                        <img src={PlusEvent} className="logo" />
                        <b>Új Hír</b>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditEventsHeader;