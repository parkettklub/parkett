import React from 'react'
import styles from './EditEvent.module.css'
import FormSimpleInput from './FormSimpleInput'

class FormBand extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Title",
            url: "www.url.com"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.formgroup} hidden={this.props.selected != this.props.title}>
                <label>Új Banda adatai:</label>
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.name}
                    name="name"
                    example="Pedrofon" label="Név" />
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.url}
                    name="url"
                    example="www.example.com" label="Url" />
                <div className={styles.formgroup}>
                    <input type="submit" value="Banda hozzáadása" className={styles.submit} />
                </div>
            </div>
        )
    }
}

export default FormBand