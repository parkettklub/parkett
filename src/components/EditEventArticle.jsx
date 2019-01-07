import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import EditArticleTitle from './EditArticleTitle';
import EditPoster from './EditPoster';

class EditEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Élőzenés Salsa Party: Cuba',
            photo: Plakat01,
            publishedAt: '2018-01-12T18:00',
            content: 'Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.',
            selectedForm: 'title',
        };
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
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        <EditArticleTitle
                            form="title"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditPoster
                            form="poster"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <div className={styles.formgroup}>
                            <input type="submit" value="Submit" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditEventArticle;
