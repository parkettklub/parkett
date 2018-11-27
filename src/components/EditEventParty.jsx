import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import FormSimpleInput from './FormSimpleInput';
import FormDateInput from './FormDateInput';
import FormTextareaInput from './FormTextareaInput';
import FormSelectInput from './FormSelectInput';
import FormMultipleSelectInput from './FormMultipleSelectInput';
import FormDJ from './FormDJ';
import FormBand from './FormBand';
import FormTeaching from './FormTeaching';

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
            bandids: [
                1,
                2
            ],
            djids: [
                1,
                3
            ],
            selectedForm: "title",
            addSelected: null,
            djs: [{
                id: 1,
                name: "DJ Eddy",
                url: "google.com"
            }, {
                id: 2,
                name: "DJ Zoli",
                url: "google.com"
            }, {
                id: 3,
                name: "DJ Nobody",
                url: "google.com"
            }, {
                id: 4,
                name: "DJ Music",
                url: "google.com"
            }, {
                id: 5,
                name: "DJ Somebody",
                url: "google.com"
            }],
            bands: [{
                id: 1,
                name: "Pedrofon",
                url: "google.com"
            }, {
                id: 2,
                name: "Cuba Ritmo Trio",
                url: "google.com"
            }],
            teachings: [{
                id: 1,
                teacher: "Plakát János és Marok Béla",
                danceid: "salsa",
                level: "kezdő",
                length: "45 perces"
            }, {
                id: 2,
                teacher: "Helpless Jonas",
                danceid: "rocky",
                level: "kezdő",
                length: "45 perces"
            }]

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
        const name = event.target.name;
        this.setState({ [name]: value });
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

    addNewElement(name) {
        this.setState({ addSelected: name })
    }

    close() {
        this.setState({ addSelected: null })
    }

    render() {
        const djOptions = [];
        this.state.djs.forEach((dj) => {
            djOptions.push(<option value={dj.id} key={dj.id}>{dj.id} - {dj.name}</option>)
        })
        const bandOptions = [];
        this.state.bands.forEach((band) => {
            bandOptions.push(<option value={band.id} key={band.id}>{band.id} - {band.name}</option>)
        })
        const teachOptions = []
        this.state.teachings.forEach((teaching) => {
            teachOptions.push(<option value={teaching.id} key={teaching.id}>{teaching.id} - {teaching.teacher} {teaching.dance} {teaching.level} {teaching.length}</option>)
        })
        return (
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect title="title" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("title")} />
                    <FormSelect title="poster" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("poster")} />
                    <FormSelect title="details" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("details")} />
                    <FormSelect title="media" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("media")} />
                    <FormSelect title="music" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("music")} />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit} >
                        <FormSimpleInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.title}
                            name="title"
                            example="Élőzenés Salsa Party: Cuba" label="Cím" />
                        <FormDateInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.start_date}
                            name="start_date"
                            example="2018. 01. 12 18:00" label="Start date" />
                        <FormDateInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.end_date}
                            name="end_date"
                            example="2018. 01. 13 01:00" label="End date" />
                        <FormTextareaInput selected={this.state.selectedForm} title="details"
                            handleChange={this.handleChange} value={this.state.content}
                            name="content"
                            example="Még érezni az előző est hangulatát ..." label="Leírás:" />
                        <FormTextareaInput selected={this.state.selectedForm} title="details"
                            handleChange={this.handleChange} value={this.state.program}
                            name="program"
                            example="19:30 kapunyitás ..." label="Program" />
                        <FormSimpleInput selected={this.state.selectedForm} title="details"
                            handleChange={this.handleChange} value={this.state.facebook_event}
                            name="facebook_event"
                            example="https://www.facebook.com/events/1598719006921910" label="Facebook event" />
                        <FormSimpleInput selected={this.state.selectedForm} title="media"
                            handleChange={this.handleChange} value={this.state.spot}
                            name="spot"
                            example="www.spot.bme.hu" label="SPOT" />
                        <FormSimpleInput selected={this.state.selectedForm} title="media"
                            handleChange={this.handleChange} value={this.state.bss}
                            name="bss"
                            example="www.bss.bme.hu" label="BSS" />
                        <FormSelectInput selected={this.state.selectedForm} title="music"
                            handleChange={this.handleChange} value={this.state.teachingid}
                            name="teachingid" label="Teaching"
                            addNew={() => this.addNewElement("teaching")} close={() => this.close()}
                            options={teachOptions} />
                        <FormTeaching selected={this.state.addSelected} title="teaching"
                            selectedObject={{
                                id: -1
                            }} />
                        <FormMultipleSelectInput selected={this.state.selectedForm} title="music"
                            handleChange={this.handleMultiple} value={this.state.bandids}
                            name="bandids" label="Band ids"
                            addNew={() => this.addNewElement("band")} close={() => this.close()}
                            options={bandOptions} />
                        <FormBand selected={this.state.addSelected} title="band"
                            selectedObject={{
                                id: -1
                            }} />
                        <FormMultipleSelectInput selected={this.state.selectedForm} title="music"
                            handleChange={this.handleMultiple} value={this.state.djids}
                            name="djids" label="DJs" addNew={() => this.addNewElement("dj")} close={() => this.close()}
                            options={djOptions} />
                        <FormDJ selected={this.state.addSelected} title="dj"
                            selectedObject={{
                                id: -1
                            }} />
                        <div className={styles.formgroup} hidden={this.state.selectedForm != "poster"}>
                            <label htmlFor="photo"><b>Poster</b></label>
                            Size must be around 350x400 px
                            <input id="photo" name="photo" type="picture" className={styles.input}
                                value={this.state.photo} onChange={this.handleChange} />
                            <img src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
                        </div>
                        <div className={styles.formgroup}>
                            <input type="submit" value="Submit" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditEventParty;