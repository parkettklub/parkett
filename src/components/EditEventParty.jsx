import React from 'react';
import Plakat01 from './Plakat.png';
import "./Form.css";

class EditEventParty extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            title: "Élőzenés Salsa Party: Cuba",
            photo: Plakat01,
            start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
            end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
            program: "19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással",
            content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
            danceid: 1,
            facebook_event: "https://www.facebook.com/events/1598719006921910/",
            spot: "https://www.facebook.com/events/1598719006921910/",
            bss: "https://www.facebook.com/events/1598719006921910/",
            teachingid: 1,
            bandid: 1,
            djid: 1
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
    }

    render() {
        return (
            <div className="card withpadding">
                <form className="form">
                    <div>
                        {this.state.id}
                    </div>
                    <div>
                        <label for="title"><b>Title</b></label>
                        <input id="title" name="title" type="text"
                            value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="start_date"><b>start_date</b></label>
                        <input id="start_date" name="start_date" type="datetime-local"
                            value={this.state.start_date} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="end_date"><b>end_date</b></label>
                        <input id="end_date" name="end_date" type="datetime-local"
                            value={this.state.end_date} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="program"><b>program</b></label>
                        <textarea id="program" name="program"
                            value={this.state.program} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="content"><b>content</b></label>
                        <textarea id="content" name="content"
                            value={this.state.content} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="danceid"><b>danceid</b></label>
                        <input id="danceid" name="danceid" type="text"
                            value={this.state.danceid} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="facebook_event"><b>facebook_event</b></label>
                        <input id="facebook_event" name="facebook_event" type="text"
                            value={this.state.facebook_event} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="spot"><b>spot</b></label>
                        <input id="spot" name="spot" type="text"
                            value={this.state.spot} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="bss"><b>bss</b></label>
                        <input id="bss" name="bss" type="text"
                            value={this.state.bss} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="teachingid"><b>teachingid</b></label>
                        <input id="teachingid" name="teachingid" type="text"
                            value={this.state.teachingid} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="bandid"><b>bandid</b></label>
                        <input id="bandid" name="bandid" type="text"
                            value={this.state.bandid} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label for="djid"><b>djid</b></label>
                        <input id="djid" name="djid" type="text"
                            value={this.state.djid} onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditEventParty;