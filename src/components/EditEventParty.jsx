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
            title: 'Élőzenés Salsa Party: Cuba',
            photo: Plakat01,
            startDate: '2018-01-12T18:00',
            endDate: '2018-01-13T01:00',
            program: '19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással',
            content: 'Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.',
            facebookEvent: 'https://www.facebook.com/events/1598719006921910/',
            spot: 'https://www.facebook.com/events/1598719006921910/',
            bss: 'https://www.facebook.com/events/1598719006921910/',
            teachingid: 1,
            bandids: [
                1,
                2,
            ],
            djids: [
                1,
                3,
            ],
            selectedForm: 'title',
            addSelected: null,
            djs: [{
                id: 1,
                name: 'DJ Eddy',
                url: 'google.com',
            }, {
                id: 2,
                name: 'DJ Zoli',
                url: 'google.com',
            }, {
                id: 3,
                name: 'DJ Nobody',
                url: 'google.com',
            }, {
                id: 4,
                name: 'DJ Music',
                url: 'google.com',
            }, {
                id: 5,
                name: 'DJ Somebody',
                url: 'google.com',
            }],
            bands: [{
                id: 1,
                name: 'Pedrofon',
                url: 'google.com',
            }, {
                id: 2,
                name: 'Cuba Ritmo Trio',
                url: 'google.com',
            }],
            teachings: [{
                id: 1,
                teacher: 'Plakát János és Marok Béla',
                danceid: 'salsa',
                level: 'kezdő',
                length: '45 perces',
            }, {
                id: 2,
                teacher: 'Helpless Jonas',
                danceid: 'rocky',
                level: 'kezdő',
                length: '45 perces',
            }],

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
        const {
            djs,
            bands,
            teachings,
            selectedForm,
            title,
            photo,
            startDate,
            endDate,
            program,
            content,
            facebookEvent,
            spot,
            bss,
            teachingid,
            bandids,
            djids,
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
                        title="media"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('media')}
                        label="SPOT és BSS"
                    />
                    <FormSelect
                        title="music"
                        selected={selectedForm}
                        onClick={() => this.ChangeTab('music')}
                        label="Zene és Tanítás"
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
                        <FormSimpleInput
                            selected={selectedForm}
                            title="details"
                            handleChange={this.handleChange}
                            value={facebookEvent}
                            name="facebook_event"
                            example="https://www.facebook.com/events/1598719006921910"
                            label="Facebook esemény"
                        />
                        <FormSimpleInput
                            selected={selectedForm}
                            title="media"
                            handleChange={this.handleChange}
                            value={spot}
                            name="spot"
                            example="www.spot.bme.hu"
                            label="SPOT"
                        />
                        <FormSimpleInput
                            selected={selectedForm}
                            title="media"
                            handleChange={this.handleChange}
                            value={bss}
                            name="bss"
                            example="www.bss.bme.hu"
                            label="BSS"
                        />
                        <FormSelectInput
                            selected={selectedForm}
                            title="music"
                            handleChange={this.handleChange}
                            value={teachingid}
                            name="teachingid"
                            label="Tanítás"
                            addNew={() => this.addNewElement('teaching')}
                            close={() => this.close()}
                            options={teachings.map(teaching => (
                                <option value={teaching.id} key={teaching.id}>
                                    {teaching.id}
                                    {' - '}
                                    {teaching.teacher}
                                    {' '}
                                    {teaching.dance}
                                    {' '}
                                    {teaching.level}
                                    {' '}
                                    {teaching.length}
                                </option>))}
                        />
                        <FormTeaching
                            selected={addSelected}
                            title="teaching"
                            selectedObject={{
                                id: -1,
                            }}
                        />
                        <FormMultipleSelectInput
                            selected={selectedForm}
                            title="music"
                            handleChange={this.handleMultiple}
                            value={bandids}
                            name="bandids"
                            label="Zenekar"
                            addNew={() => this.addNewElement('band')}
                            close={() => this.close()}
                            options={
                                bands.map(band => (
                                    <option value={band.id} key={band.id}>
                                        {band.id}
                                        {' - '}
                                        {band.name}
                                    </option>))}
                        />
                        <FormBand
                            selected={addSelected}
                            title="band"
                            selectedObject={{
                                id: -1,
                            }}
                        />
                        <FormMultipleSelectInput
                            selected={selectedForm}
                            title="music"
                            handleChange={this.handleMultiple}
                            value={djids}
                            name="djids"
                            label="DJ"
                            addNew={() => this.addNewElement('dj')}
                            close={() => this.close()}
                            options={
                                djs.map(dj => (
                                    <option value={dj.id} key={dj.id}>
                                        {dj.id}
                                        {' - '}
                                        {dj.name}
                                    </option>))}
                        />
                        <FormDJ
                            selected={addSelected}
                            title="dj"
                            selectedObject={{
                                id: -1,
                            }}
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
                        <div className={styles.formgroup}>
                            <input type="submit" value="Mentés" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditEventParty;
