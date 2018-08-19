import React from 'react';
import Plakat01 from './Plakat.png';
import './Editor.css';
import './Card.css';

class EditEventWorkshop extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            title: "Élőzenés Salsa Party: Cuba",
            photo: Plakat01,
            start_date: "2018-01-12T18:00",
            end_date: "2018-01-13T01:00",
            program: "19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással",
            content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
            danceid: 1,
            teacherid: 1,
            theme: "Teljesen kezdő gyorstalpaló kizomba tánctanítás, amely egy hónapnyi tánctudást biztosít és lehetővé teszi a már elindult tánctanfolyamokba való bekapcsolódást.",
            facebook_event: "https://www.facebook.com/events/1598719006921910/",
            application_form: "https://goo.gl/forms/EMAqXVoJDJQGNkeq1",
            selectedForm: "title",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
        this.handleMultiple = this.handleMultiple.bind(this);
    }

    handleMultiple(event) {
        var options = event.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(parseInt(options[i].value));
            }
        }
        console.log(value);
        const name = event.target.name;
        this.setState({ [name]: value });
    }

    handleChange(event) {
        console.log(event.target.value);
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    ChangeTab(tabName) {
        this.setState({
            selectedForm: tabName
        })
    }

    render() {
        const teachers = [{
            id: 1,
            name: "Me and You"
        }, {
            id: 2,
            name: "You and Me"
        },];
        const teacherOptions = []
        teachers.forEach((teacher) => {
            teacherOptions.push(<option value={teacher.id} key={teacher.id}>{teacher.id} - {teacher.name}</option>)
        });

        const dances = [{
            id: 1,
            name: "kizomba"
        }, {
            id: 2,
            name: "salsa"
        },];
        const danceOptions = []
        dances.forEach((dance) => {
            danceOptions.push(<option value={dance.id} key={dance.id}>{dance.id} - {dance.name}</option>)
        });
        return (
            <div className="card multistep-editor grid" key="EditEventparty">
                <div className="edit-steps">
                    <div onClick={this.props.onClick}>
                        Új workshop hozzáadása <br />
                        Régi workshop frissítése
                    </div>
                    <div className={this.state.selectedForm == "title" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("title")}>
                        Title and date
                    </div>
                    <div className={this.state.selectedForm == "poster" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("poster")}>
                        Poster
                    </div>
                    <div className={this.state.selectedForm == "details" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("details")}>
                        Details
                    </div>
                    <div className={this.state.selectedForm == "dance" ? "selectedStage" : "stage"}
                        onClick={() => this.ChangeTab("dance")}>
                        Dance
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
                            <label htmlFor="start_date"><b>Start date</b></label>
                            <input id="start_date" name="start_date" type="datetime-local" className="inputField"
                                value={this.state.start_date} onChange={this.handleChange} />
                            <div className="helper">2018-01-12 18:00</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label htmlFor="end_date"><b>End date</b></label>
                            <input id="end_date" name="end_date" type="datetime-local" className="inputField"
                                value={this.state.end_date} onChange={this.handleChange} />
                            <div className="helper">2018-01-13 01:00</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label htmlFor="content"><b>Leírás:</b></label>
                            <textarea id="content" name="content" type="text" className="inputField"
                                value={this.state.content} onChange={this.handleChange} />
                            <div className="helper">Még érezni az előző est hangulatát ...</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label htmlFor="program"><b>Program</b></label>
                            <textarea id="program" name="program" type="text" className="inputField"
                                value={this.state.program} onChange={this.handleChange} />
                            <div className="helper">19:30 kapunyitás ...</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label htmlFor="facebook_event"><b>Facebook event:</b></label>
                            <input id="facebook_event" name="facebook_event" type="text" className="inputField"
                                value={this.state.facebook_event} onChange={this.handleChange} />
                            <div className="helper">https://www.facebook.com/events/1598719006921910/a</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "poster"}>
                            <label htmlFor="photo"><b>Poster</b></label>
                            <input id="photo" name="photo" type="picture" className="inputField"
                                value={this.state.photo} onChange={this.handleChange} />
                            <img src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "dance"}>
                            <label htmlFor="danceid"><b>danceid</b></label>
                            <select id="danceid" name="danceid" value={this.state.danceid} onChange={this.handleChange}
                                className="inputField" >
                                {danceOptions}
                            </select>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "dance"}>
                            <label htmlFor="teacherid"><b>teacherid</b></label>
                            <select id="teacherid" name="teacherid" value={this.state.teacherid} onChange={this.handleChange}
                                className="inputField" >
                                {teacherOptions}
                            </select>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "dance"}>
                            <label htmlFor="application_form"><b>application_form:</b></label>
                            <input id="application_form" name="application_form" type="text" className="inputField"
                                value={this.state.application_form} onChange={this.handleChange} />
                            <div className="helper">https://goo.gl/forms/EMAqXVoJDJQGNkeq1</div>
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

export default EditEventWorkshop;