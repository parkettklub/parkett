import React from 'react';
import './Editor.css';
import './Card.css';
import Editicon from './pencil.svg';

class EditKnowledgeMain extends React.Component {
    constructor() {
        super();
        this.state = {
            bands: [{
                id: 1,
                name: "Pedrofon",
                url: "google.com"
            }, {
                id: 2,
                name: "Cuba Ritmo Trio",
                url: "google.com"
            }
            ],
            djs: [{
                id: 1,
                name: "DJ Andrea",
                url: "google.com"
            }],
            danceteachers: [{
                id: 1,
                name: "Kovács Béla és Heves Kornélia",
                url: "wwww.parkettklub.hu"
            }],
            dances: [{
                id: 1,
                name: "salsa",
                content: "A salsa egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus."
            }],
            partyteachers: [{
                id: 1,
                teacherid: 1,
                danceid: 1,
                level: "kezdő",
                length: "45 perces"
            }],
            name: "",
            selectedId: 3,
            content: "",
            selectedForm: "dance",
            url: "",
            teacherid: 1,
            danceid: 1,
            level: "",
            length: "",
            nextId: 3,
            new: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
        this.getDanceTeacher = this.getDanceTeacher.bind(this);
        this.getDance = this.getDance.bind(this);
        this.EditElement = this.EditElement.bind(this);
    }


    handleSubmit(event) {
        if (this.state.selectedForm == "band") {
            if (this.state.new) {
                this.state.bands.push({
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                });
            } else {
                let index = this.state.bands.findIndex((element) => element.id == this.state.selectedId);
                this.state.bands[index] = {
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                }
            }
            this.setState({ selectedForm: "band" });
        }
        if (this.state.selectedForm == "dj") {
            if (this.state.new) {
                this.state.djs.push({
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                });
            } else {
                let index = this.state.djs.findIndex((element) => element.id == this.state.selectedId);
                this.state.djs[index] = {
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                };
            }
            this.setState({ selectedForm: "dj" });
        }
        if (this.state.selectedForm == "danceteacher") {
            if (this.state.new) {
                this.state.danceteachers.push({
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                });
            } else {
                let index = this.state.danceteachers.findIndex((element) => element.id == this.state.selectedId);
                this.state.danceteachers[index] = {
                    id: this.state.selectedId,
                    name: this.state.name,
                    url: this.state.url
                };
            }
            this.setState({ selectedForm: "danceteacher" });
        }
        if (this.state.selectedForm == "dance") {
            if (this.state.new) {
                this.state.dances.push({
                    id: this.state.selectedId,
                    name: this.state.name,
                    content: this.state.content
                });
            } else {
                let index = this.state.dances.findIndex((element) => element.id == this.state.selectedId);
                this.state.dances[index] = {
                    id: this.state.selectedId,
                    name: this.state.name,
                    content: this.state.content
                };
            }
            this.setState({ selectedForm: "dance" });
        }
        if (this.state.selectedForm == "partyteacher") {
            if (this.state.new) {
                this.state.partyteachers.push({
                    id: this.state.selectedId,
                    teacherid: this.state.teacherid,
                    danceid: this.state.danceid,
                    level: this.state.level,
                    length: this.state.length,
                });
            } else {
                let index = this.state.partyteachers.findIndex((element) => element.id == this.state.selectedId);
                this.state.partyteachers[index] = {
                    id: this.state.selectedId,
                    teacherid: this.state.teacherid,
                    danceid: this.state.danceid,
                    level: this.state.level,
                    length: this.state.length,
                };
            }
            this.setState({
                selectedForm: "partyteacher",
            });
        }
        this.setState({
            selectedId: this.state.nextId++,
            new: true,
            name: "",
            content: "",
            url: "",
            teacherid: 1,
            danceid: 1,
            level: "",
            length: "",
        });
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    getDanceTeacher(id) {
        return this.state.danceteachers.find((teacher) => teacher.id == id);
    }

    getDance(id) {
        return this.state.dances.find((dance) => dance.id == id);
    }

    ChangeTab(tabName) {
        this.setState({
            selectedForm: tabName,
            new: true,
            name: "",
            content: "",
            url: "",
            teacherid: 1,
            danceid: 1,
            level: "",
            length: "",
        })
    }

    EditElement(element, type) {
        if (type == "dance") {
            this.setState({
                selectedId: element.id,
                name: element.name,
                content: element.content,
                new: false,
            });
        }

        if (type == "band") {
            this.setState({
                selectedId: element.id,
                name: element.name,
                url: element.url,
                new: false,
            });
        }
        if (type == "dj") {
            this.setState({
                selectedId: element.id,
                name: element.name,
                url: element.url,
                new: false,
            });
        }
        if (type == "danceteacher") {
            this.setState({
                selectedId: element.id,
                name: element.name,
                url: element.url,
                new: false,
            });
        }
        if (type == "partyteacher") {
            this.setState({
                teacherid: element.teacherid,
                danceid: element.danceid,
                level: element.level,
                length: element.length,
                selectedId: element.id,
                new: false,
            });
        }
    }

    render() {
        let bands = [];
        bands.push(<div className="id" key="bandid-title"><b>EDIT</b></div>);
        bands.push(<div key="bandname"><b>NAME</b></div>);
        this.state.bands.forEach(element => {
            bands.push(
                <div className="id" key={element.id} onClick={() => this.EditElement(element, "band")}>
                    <img src={Editicon} />
                </div>);
            bands.push(<div key={element.id + "_desc"}>{element.name} {element.url}</div>);
        });
        let djs = [];
        djs.push(<div className="id" key="djid"><b>EDIT</b></div>);
        djs.push(<div key="djdesc"><b>NAME</b></div>);
        this.state.djs.forEach(element => {
            djs.push(
                <div className="id" key={element.id} onClick={() => this.EditElement(element, "dj")}>
                    <img src={Editicon} />
                </div>);
            djs.push(<div key={element.id + "_desc"}>{element.name} {element.url}</div>);
        });
        let dances = [];
        dances.push(<div className="id" key="danceid"><b>EDIT</b></div>);
        dances.push(<div key="dancedesc"><b>NAME</b></div>);
        this.state.dances.forEach(element => {
            dances.push(
                <div className="id" key={element.id} onClick={() => this.EditElement(element, "dance")}>
                    <img src={Editicon} />
                </div>);
            dances.push(<div key={element.id + "_desc"}>{element.name}</div>);
        });
        let danceteachers = [];
        danceteachers.push(<div className="id" key="dteacherid"><b>EDIT</b></div>);
        danceteachers.push(<div key="dteacherdesc"><b>NAME</b></div>);
        this.state.danceteachers.forEach(element => {
            danceteachers.push(
                <div className="id" key={element.id} onClick={() => this.EditElement(element, "danceteacher")}>
                    <img src={Editicon} />
                </div>);
            danceteachers.push(<div key={element.id + "_desc"}>{element.name} {element.url}</div>);
        });
        let partyteachers = [];
        partyteachers.push(<div className="id" key="pteacherid"><b>EDIT</b></div>);
        partyteachers.push(<div key="pteacherdesc"><b>Teacher and dance</b></div>);
        this.state.partyteachers.forEach(element => {
            partyteachers.push(
                <div className="id" key={element.id} onClick={() => this.EditElement(element, "partyteacher")}>
                    <img src={Editicon} />
                </div>);
            partyteachers.push(
                <div key={element.id + "_desc"}>
                    {this.getDanceTeacher(element.teacherid).name} {this.getDance(element.danceid).name} {element.level} {element.length}
                </div>);
        });
        const danceOptions = [];
        this.state.dances.forEach((dance) => {
            danceOptions.push(<option value={dance.id} key={dance.id}>{dance.id} - {dance.name}</option>)
        });
        const teacherOptions = [];
        this.state.danceteachers.forEach((teacher) => {
            teacherOptions.push(<option value={teacher.id} key={teacher.id}>{teacher.id} - {teacher.name}</option>)
        });
        return (
            <div className="multistep-editor card grid">
                <div className="edit-steps">
                    <div className={this.state.selectedForm == "dance" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("dance")}>
                        Dances
                    </div>
                    <div className={this.state.selectedForm == "band" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("band")}>
                        Bands
                    </div>
                    <div className={this.state.selectedForm == "dj" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("dj")}>
                        DJs
                    </div>
                    <div className={this.state.selectedForm == "danceteacher" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("danceteacher")}>
                        Dance teachers
                    </div>
                    <div className={this.state.selectedForm == "partyteacher" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("partyteacher")}>
                        Party teacher
                    </div>
                </div>
                <div >
                    <div className="form">
                        <form onSubmit={this.handleSubmit} >
                            <div className="formGroup"
                                hidden={this.state.selectedForm == "partyteacher"}>
                                <label htmlFor="name"><b>Name</b></label>
                                <input id="name" name="name" type="text" className="inputField"
                                    value={this.state.name} onChange={this.handleChange} />
                                <div className="helper">Salsa - kubai</div>
                            </div>
                            <div className="formGroup"
                                hidden={this.state.selectedForm != "dance"}>
                                <label htmlFor="content"><b>Leírás:</b></label>
                                <textarea id="content" name="content" type="text" className="inputField"
                                    value={this.state.content} onChange={this.handleChange} />
                                <div className="helper">Még érezni az előző est hangulatát ...</div>
                            </div>
                            <div className="formGroup"
                                hidden={this.state.selectedForm != "dj" && this.state.selectedForm != "danceteacher" && this.state.selectedForm != "band"}>
                                <label htmlFor="url"><b>Leírás:</b></label>
                                <input id="url" name="url" type="text" className="inputField"
                                    value={this.state.url} onChange={this.handleChange} />
                                <div className="helper">www.parkettklub.hu</div>
                            </div>
                            <div className="formGroup" hidden={this.state.selectedForm != "partyteacher"}>
                                <label htmlFor="danceid"><b>danceid</b></label>
                                <select id="danceid" name="danceid" value={this.state.danceid} onChange={this.handleChange}
                                    className="inputField" >
                                    {danceOptions}
                                </select>
                            </div>
                            <div className="formGroup" hidden={this.state.selectedForm != "partyteacher"}>
                                <label htmlFor="teacherid"><b>teacherid</b></label>
                                <select id="teacherid" name="teacherid" value={this.state.teacherid} onChange={this.handleChange}
                                    className="inputField" >
                                    {teacherOptions}
                                </select>
                            </div>
                            <div className="formGroup"
                                hidden={this.state.selectedForm != "partyteacher"}>
                                <label htmlFor="level"><b>level</b></label>
                                <input id="level" name="level" type="text" className="inputField"
                                    value={this.state.level} onChange={this.handleChange} />
                                <div className="helper">kezdő</div>
                            </div>
                            <div className="formGroup"
                                hidden={this.state.selectedForm != "partyteacher"}>
                                <label htmlFor="length"><b>length</b></label>
                                <input id="length" name="length" type="text" className="inputField"
                                    value={this.state.length} onChange={this.handleChange} />
                                <div className="helper">rövid</div>
                            </div>
                            <div className="formGroup mySubmitgroup">
                                <input type="submit" value={this.state.new ? "Add" : "Modify"} className="mySubmit" />
                            </div>
                        </form>
                    </div>
                    <div className={this.state.selectedForm != "band" ? "hidden" : "list-of-items grid"}>
                        {bands}
                    </div>
                    <div className={this.state.selectedForm != "dj" ? "hidden" : "list-of-items grid"}>
                        {djs}
                    </div>
                    <div className={this.state.selectedForm != "dance" ? "hidden" : "list-of-items grid"}>
                        {dances}
                    </div>
                    <div className={this.state.selectedForm != "danceteacher" ? "hidden" : "list-of-items grid"}>
                        {danceteachers}
                    </div>
                    <div className={this.state.selectedForm != "partyteacher" ? "hidden" : "list-of-items grid"}>
                        {partyteachers}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditKnowledgeMain;