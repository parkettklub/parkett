import React from 'react';
import './Editor.css';
import './Card.css';
import Plusicon from './document.svg';
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
            name: "Template",
            content: "Template COntent",
            selectedForm: "dance"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
    }


    handleSubmit(event) {
        console.log(this.state.bands);
        this.state.bands.push({
            id: 3,
            name: this.state.name,
            content: this.state.content
        });
        this.setState({ selectedForm: "dance" });
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }


    ChangeTab(tabName) {
        this.setState({
            selectedForm: tabName
        })
    }
    render() {
        let selected = [];
        let rows = [];
        rows.push(<div className="id"><b>ID</b></div>);
        rows.push(<div><b>NAME</b></div>);
        this.state.bands.forEach(element => {
            rows.push(<div className="id"> {element.id}</div>);
            rows.push(<div>{element.name}</div>);
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
                    <div className="form" hidden={this.state.selectedForm != "dance"}>
                        <form onSubmit={this.handleSubmit} >
                            <div className="formGroup">
                                <label htmlFor="name"><b>Name</b></label>
                                <input id="name" name="name" type="text" className="inputField"
                                    value={this.state.name} onChange={this.handleChange} />
                                <div className="helper">Salsa - kubai</div>
                            </div>
                            <div className="formGroup">
                                <label htmlFor="content"><b>Leírás:</b></label>
                                <textarea id="content" name="content" type="text" className="inputField"
                                    value={this.state.content} onChange={this.handleChange} />
                                <div className="helper">Még érezni az előző est hangulatát ...</div>
                            </div>
                            <div className="formGroup mySubmitgroup">
                                <input type="submit" value="Add" className="mySubmit" />
                            </div>
                        </form>
                    </div>
                    <div className="list-of-items grid">
                        {rows}
                    </div>
                </div>
                {selected}
            </div>
        )
    }
}

export default EditKnowledgeMain;