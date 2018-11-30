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
            title: 'Élőzenés Salsa Party: Cuba',
            photo: Plakat01,
            startDate: '2018-01-12T18:00',
            endDate: '2018-01-13T01:00',
            program: '19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással',
            content: 'Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.',
            danceid: 1,
            teacherid: 1,
            theme: 'Teljesen kezdő gyorstalpaló kizomba tánctanítás, amely egy hónapnyi tánctudást biztosít és lehetővé teszi a már elindult tánctanfolyamokba való bekapcsolódást.',
            facebookEvent: 'https://www.facebook.com/events/1598719006921910/',
            applicationForm: 'https://goo.gl/forms/EMAqXVoJDJQGNkeq1',
            selectedForm: 'title',
            addSelected: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
        this.handleMultiple = this.handleMultiple.bind(this);
    }

    handleMultiple(event) {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(parseInt(options[i].value, 10));
            }
        }
        const { name } = event.target;
        this.setState({ [name]: value });
    }

    handleChange(event) {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    ChangeTab(tabName) {
        this.setState({
            selectedForm: tabName,
        });
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close() {
        this.setState({ addSelected: null });
    }

    render() {
        const teachers = [{
            id: 1,
            name: 'Me and You',
        }, {
            id: 2,
            name: 'You and Me',
        }];
        const dances = [{
            id: 1,
            name: 'kizomba',
        }, {
            id: 2,
            name: 'salsa',
        }];
        const {
            title,
            photo,
            startDate,
            endDate,
            program,
            content,
            danceid,
            teacherid,
            theme,
            facebookEvent,
            applicationForm,
            selectedForm,
            addSelected,
        } = this.state;
        return (
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect
                        title="title"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('title')}
                        label="Alap adatok"
                    />
                    <FormSelect
                        title="poster"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('poster')}
                        label="Plakát"
                    />
                    <FormSelect
                        title="details"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('details')}
                        label="Leírás és Facebook"
                    />
                    <FormSelect
                        title="dance"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('dance')}
                        label="Tanítás és Form"
                    />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        <FormSimpleInput
                            selected={selectedForm}
                            title="title"
                            handleChange={this.handleChange}
                            value={title}
                            name="title"
                            example="Élőzenés Salsa Party: Cuba"
                            label="Cím"
                        />
                        <FormDateInput
                            selected={selectedForm}
                            title="title"
                            handleChange={this.handleChange}
                            value={startDate}
                            name="start_date"
                            example="2018. 01. 12 18:00"
                            label="Kezdés"
                        />
                        <FormDateInput
                            selected={selectedForm}
                            title="title"
                            handleChange={this.handleChange}
                            value={endDate}
                            name="end_date"
                            example="2018. 01. 13 01:00"
                            label="Vége"
                        />
                        <FormTextareaInput
                            selected={selectedForm}
                            title="details"
                            handleChange={this.handleChange}
                            value={content}
                            name="content"
                            example="Még érezni az előző est hangulatát ..."
                            label="Leírás:"
                        />
                        <FormTextareaInput
                            selected={selectedForm}
                            title="details"
                            handleChange={this.handleChange}
                            value={program}
                            name="program"
                            example="19:30 kapunyitás ..."
                            label="Program"
                        />
                        <FormTextareaInput
                            selected={selectedForm}
                            title="details"
                            handleChange={this.handleChange}
                            value={theme}
                            name="theme"
                            example="Egész hónapos tudás ..."
                            label="Tematika:"
                        />
                        <FormSimpleInput
                            selected={selectedForm}
                            title="details"
                            handleChange={this.handleChange}
                            value={facebookEvent}
                            name="facebook_event"
                            example="https://www.facebook.com/events/1598719006921910"
                            label="Facebook esemény"
                        />
                        <FormSelectInput
                            selected={selectedForm}
                            title="dance"
                            handleChange={this.handleChange}
                            value={danceid}
                            name="danceid"
                            label="Tánc"
                            options={dances.map(dance => (
                                <option value={dance.id} key={dance.id}>
                                    {dance.id}
                                    {' - '}
                                    {dance.name}
                                </option>))}
                            addNew={() => this.addNewElement('dance')}
                            close={() => this.close()}
                        />
                        <FormDance
                            selected={addSelected}
                            title="dance"
                            selectedObject={{
                                id: -1,
                            }}
                        />
                        <FormSelectInput
                            selected={selectedForm}
                            title="dance"
                            handleChange={this.handleChange}
                            value={teacherid}
                            name="teacherid"
                            label="Tanár"
                            options={teachers.map(teacher => (
                                <option value={teacher.id} key={teacher.id}>
                                    {teacher.id}
                                    {' - '}
                                    {teacher.name}
                                </option>))}
                            addNew={() => this.addNewElement('teacher')}
                            close={() => this.close()}
                        />
                        <FormTeacher
                            selected={addSelected}
                            title="teacher"
                            selectedObject={{
                                id: -1,
                            }}
                        />
                        <FormSimpleInput
                            selected={selectedForm}
                            title="dance"
                            handleChange={this.handleChange}
                            value={applicationForm}
                            name="application_form"
                            example="https://goo.gl/forms/EMAqXVoJDJQGNkeq1"
                            label="Jelentkező form"
                        />
                        <div className={styles.formgroup} hidden={selectedForm !== 'poster'}>
                            <label htmlFor="photo">
                                <b>Plakát</b>
                                {'Size must be around 350x400 px'}
                                <input
                                    id="photo"
                                    name="photo"
                                    type="picture"
                                    className={styles.input}
                                    value={photo}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <img alt="" src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
                        </div>
                        <div className="formGroup mySubmitgroup">
                            <input type="submit" value="Mentés" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditEventWorkshop;
