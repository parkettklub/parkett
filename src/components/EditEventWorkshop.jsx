import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import FormSimpleInput from './FormSimpleInput';
import FormDateInput from './FormDateInput';
import FormTextareaInput from './FormTextareaInput';
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

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
            addSelected: null
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
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect title="title" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("title")} />
                    <FormSelect title="poster" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("poster")} />
                    <FormSelect title="details" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("details")} />
                    <FormSelect title="dance" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("dance")} />
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
                        <FormSelectInput selected={this.state.selectedForm} title="dance"
                            handleChange={this.handleChange} value={this.state.danceid}
                            name="danceid" label="Dance" options={danceOptions}
                            addNew={() => this.addNewElement("dance")} close={() => this.close()} />
                        <FormDance selected={this.state.addSelected} title="dance"
                            selectedObject={{
                                id: -1
                            }} />
                        <FormSelectInput selected={this.state.selectedForm} title="dance"
                            handleChange={this.handleChange} value={this.state.teacherid}
                            name="teacherid" label="Teacher" options={teacherOptions}
                            addNew={() => this.addNewElement("teacher")} close={() => this.close()} />
                        <FormTeacher selected={this.state.addSelected} title="teacher"
                            selectedObject={{
                                id: -1
                            }} />
                        <FormSimpleInput selected={this.state.selectedForm} title="dance"
                            handleChange={this.handleChange} value={this.state.application_form}
                            name="application_form"
                            example="https://goo.gl/forms/EMAqXVoJDJQGNkeq1" label="Application form" />
                        <div className={styles.formgroup} hidden={this.state.selectedForm != "poster"}>
                            <label htmlFor="photo"><b>Poster</b></label>
                            Size must be around 350x400 px
                            <input id="photo" name="photo" type="picture" className={styles.input}
                                value={this.state.photo} onChange={this.handleChange} />
                            <img src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
                        </div>
                        <div className="formGroup mySubmitgroup">
                            <input type="submit" value="Submit" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditEventWorkshop;