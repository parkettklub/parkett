import React from 'react';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import FormSimpleInput from './FormSimpleInput';
import FormDateInput from './FormDateInput';
import FormTextareaInput from './FormTextareaInput';

class EditEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            title: "Élőzenés Salsa Party: Cuba",
            photo: Plakat01,
            published_at: "2018-01-12T18:00",
            content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
            selectedForm: "title",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeTab = this.ChangeTab.bind(this);
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

    render() {
        return (
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect title="title" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("title")}
                        label="Alap adatok" />
                    <FormSelect title="poster" selected={this.state.selectedForm}
                        onClick={() => this.ChangeTab("poster")}
                        label="Plakát" />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit} >
                        <FormSimpleInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.title}
                            name="title"
                            example="Élőzenés Salsa Party: Cuba" label="Cím" />
                        <FormDateInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.published_at}
                            name="published_at"
                            example="2018. 01. 12 18:00" label="Időpont" />
                        <FormTextareaInput selected={this.state.selectedForm} title="title"
                            handleChange={this.handleChange} value={this.state.content}
                            name="content"
                            example="Még érezni az előző est hangulatát ..." label="Leírás:" />
                        <div className={styles.formgroup} hidden={this.state.selectedForm != "poster"}>
                            <label htmlFor="photo"><b>Plakát</b></label>
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

export default EditEventArticle;