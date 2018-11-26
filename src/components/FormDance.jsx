import React from 'react'
import styles from './EditEvent.module.css'
import FormSimpleInput from './FormSimpleInput'
import FormTextareaInput from './FormTextareaInput'

class FormDance extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Title",
            content: "long content"
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
                <label>Új Tánc adatai:</label>
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.name}
                    name="name"
                    example="Pedrofon" label="Név" />
                <FormTextareaInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.content}
                    name="content"
                    example="Ez a tánc a legeslegjobb" label="Content" />
                <div className={styles.formgroup}>
                    <input type="submit" value="Tánc hozzáadása" className={styles.submit} />
                </div>
            </div>
        )
    }
}

export default FormDance