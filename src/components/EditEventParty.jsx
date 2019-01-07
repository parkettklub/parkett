import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import EditTitleAndDate from './EditTitleAndDate';
import EditPoster from './EditPoster';
import EditDetails from './EditDetails';
import EditMedia from './EditMedia';
import EditMusicTeaching from './EditMusicTeaching';

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
        };
    }

    handleMultiple = (event) => {
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

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({});
    }

    changeTab = (tabName) => {
        this.setState({
            selectedForm: tabName,
        });
    }

    render() {
        const {
            selectedForm,
        } = this.state;
        return (
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect
                        title="title"
                        selected={selectedForm}
                        onClick={() => this.changeTab('title')}
                        label="Alap adatok"
                    />
                    <FormSelect
                        title="poster"
                        selected={selectedForm}
                        onClick={() => this.changeTab('poster')}
                        label="Plakát"
                    />
                    <FormSelect
                        title="details"
                        selected={selectedForm}
                        onClick={() => this.changeTab('details')}
                        label="Leírás és Facebook"
                    />
                    <FormSelect
                        title="media"
                        selected={selectedForm}
                        onClick={() => this.changeTab('media')}
                        label="SPOT és BSS"
                    />
                    <FormSelect
                        title="music"
                        selected={selectedForm}
                        onClick={() => this.changeTab('music')}
                        label="Zene és Tanítás"
                    />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        <EditTitleAndDate
                            form="title"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditDetails
                            form="details"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditMedia
                            form="media"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditMusicTeaching
                            form="music"
                            handleChange={this.handleChange}
                            handleMultiple={this.handleMultiple}
                            {...this.state}
                        />
                        <EditPoster
                            form="poster"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
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