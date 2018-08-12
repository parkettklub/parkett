import React from 'react';
import Plakat01 from './Plakat.png';
import './Editor.css';

class EditEventParty extends React.Component {
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
            facebook_event: "https://www.facebook.com/events/1598719006921910/",
            spot: "https://www.facebook.com/events/1598719006921910/",
            bss: "https://www.facebook.com/events/1598719006921910/",
            teachingid: 1,
            bandid: 1,
            djid: 1,
            selectedForm: "title",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.TitleAndDate = this.TitleAndDate.bind(this);
        this.Details = this.Details.bind(this);
        this.Media = this.Media.bind(this);
        this.Poster = this.Poster.bind(this);
        this.Music = this.Music.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        console.log(this.state);
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
        event.preventDefault();
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    TitleAndDate() {
        this.setState({
            selectedForm: "title"
        })

    }

    Details() {
        this.setState({
            selectedForm: "details"
        })
    }

    Music() {
        this.setState({
            selectedForm: "music"
        })
    }

    Media() {
        this.setState({
            selectedForm: "media"
        })
    }

    Poster() {
        this.setState({
            selectedForm: "poster"
        })
    }

    render() {
        return (
            <div className="card editEventMain">
                <div className="editStages">
                    <div>
                        Új esemény hozzáadása <br />
                        Régi esemény frissítése
                    </div>
                    <div className={this.state.selectedForm == "title" ? "selectedStage" : "stage"} onClick={this.TitleAndDate}>
                        Title and date
                    </div>
                    <div className={this.state.selectedForm == "poster" ? "selectedStage" : "stage"} onClick={this.Poster}>
                        Poster
                    </div>
                    <div className={this.state.selectedForm == "details" ? "selectedStage" : "stage"} onClick={this.Details}>
                        Details
                    </div>
                    <div className={this.state.selectedForm == "media" ? "selectedStage" : "stage"} onClick={this.Media}>
                        Media
                    </div>
                    <div className={this.state.selectedForm == "music" ? "selectedStage" : "stage"} onClick={this.Music}>
                        Music and Teaching
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={this.handleSubmit} >
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label for="title"><b>Title</b></label>
                            <input id="title" name="title" type="text"
                                value={this.state.title} onChange={this.handleChange} />
                            <div className="helper">Élőzenés Salsa Party: Cuba</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label for="start_date"><b>Start date</b></label>
                            <input id="start_date" name="start_date" type="datetime-local"
                                value={this.state.start_date} onChange={this.handleChange} />
                            <div className="helper">2018-01-12 18:00</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "title"}>
                            <label for="end_date"><b>End date</b></label>
                            <input id="end_date" name="end_date" type="datetime-local"
                                value={this.state.end_date} onChange={this.handleChange} />
                            <div className="helper">2018-01-13 01:00</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label for="content"><b>Leírás:</b></label>
                            <textarea id="content" name="content" type="text"
                                value={this.state.content} onChange={this.handleChange} />
                            <div className="helper">Még érezni az előző est hangulatát ...</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label for="program"><b>Program</b></label>
                            <textarea id="program" name="program" type="text"
                                value={this.state.program} onChange={this.handleChange} />
                            <div className="helper">19:30 kapunyitás ...</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "details"}>
                            <label for="facebook_event"><b>Facebook event:</b></label>
                            <input id="facebook_event" name="facebook_event" type="text"
                                value={this.state.facebook_event} onChange={this.handleChange} />
                            <div className="helper">https://www.facebook.com/events/1598719006921910/a</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "media"}>
                            <label for="spot"><b>spot</b></label>
                            <input id="spot" name="spot" type="text"
                                value={this.state.spot} onChange={this.handleChange} />
                            <div className="helper">https://www.facebook.com/events/1598719006921910/</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "media"}>
                            <label for="bss"><b>bss</b></label>
                            <input id="bss" name="bss" type="text"
                                value={this.state.bss} onChange={this.handleChange} />
                            <div className="helper">https://www.facebook.com/events/1598719006921910/</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "music"}>
                            <label for="teachingid"><b>teachingid</b></label>
                            <input id="teachingid" name="teachingid" type="text"
                                value={this.state.teachingid} onChange={this.handleChange} />
                            <div className="helper">1</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "music"}>
                            <label for="bandid"><b>bandid</b></label>
                            <input id="bandid" name="bandid" type="text"
                                value={this.state.bandid} onChange={this.handleChange} />
                            <div className="helper">1</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "music"}>
                            <label for="djid"><b>djid</b></label>
                            <input id="djid" name="djid" type="text"
                                value={this.state.djid} onChange={this.handleChange} />
                            <div className="helper">1</div>
                        </div>
                        <div className="formGroup" hidden={this.state.selectedForm != "poster"}>
                            <label for="photo"><b>Poster</b></label>
                            <input id="photo" name="photo" type="file"
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

export default EditEventParty;