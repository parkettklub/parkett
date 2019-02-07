import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import EditTitleAndDate from './EditTitleAndDate';
import EditDetails from './EditDetails';
import EditPoster from './EditPoster';
import EditTeaachingForm from './EditDanceCourseForm';
import FormTextareaInput from './FormTextareaInput';

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
            theme,
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
                        title="dance"
                        selected={selectedForm}
                        onClick={() => this.changeTab('dance')}
                        label="Tanítás és Form"
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
                        <FormTextareaInput
                            selectedForm={selectedForm}
                            form="details"
                            handleChange={this.handleChange}
                            value={theme}
                            name="theme"
                            example="Egész hónapos tudás ..."
                            label="Tematika:"
                        />
                        <EditTeaachingForm
                            form="dance"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditPoster
                            form="poster"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
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
