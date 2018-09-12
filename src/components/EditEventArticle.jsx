import React from 'react';
import Plakat01 from './Plakat.png';
import './Editor.css';
import './Card.css';

class EditEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            title: "Élőzenés Salsa Party: Cuba",
            photo: Plakat01,
            published_at: "2018-01-12T18:00",
            content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
            selectedForm: "title",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    ChangeTab(tabName) {
        this.setState({
            selectedForm: tabName
        })
    }

    render() {
        return (
            <div className="card multistep-editor grid" key="EditEventparty">
                <div className="edit-steps">
                    <div onClick={this.props.onClick}>
                        Új hír hozzáadása
                    </div>
                    <div className={this.state.selectedForm == "title" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("title")}>
                        Title and content
                    </div>
                    <div className={this.state.selectedForm == "poster" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("poster")}>
                        Poster
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={this.handleSubmit} >
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label htmlFor="title"><b>Title</b></label>
                            <input id="title" name="title" type="text" className="inputField"
                                value={this.state.title} onChange={this.handleChange} />
                            <div className="helper">Élőzenés Salsa Party: Cuba</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label htmlFor="published_at"><b>Start date</b></label>
                            <input id="published_at" name="published_at" type="datetime-local" className="inputField"
                                value={this.state.published_at} onChange={this.handleChange} />
                            <div className="helper">2018-01-12 18:00</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label htmlFor="content"><b>Leírás:</b></label>
                            <textarea id="content" name="content" type="text" className="inputField"
                                value={this.state.content} onChange={this.handleChange} />
                            <div className="helper">Még érezni az előző est hangulatát ...</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "poster"}>
                            <label htmlFor="photo"><b>Poster</b></label>
                            Size must be around 350x400 px
                            <input id="photo" name="photo" type="picture" className="inputField"
                                value={this.state.photo} onChange={this.handleChange} />
                            <img src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
                        </div>
                        <div className="formGroup mySubmitgroup">
                            <input type="submit" value="Submit" className="mySubmit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditEventArticle;