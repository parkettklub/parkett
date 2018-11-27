import React from 'react'
import styles from './Form.module.css'
import FormSimpleInput from './FormSimpleInput'
import FormBase from './FormBase';

class FormDJ extends FormBase {

    render() {
        this.LoadObject(this.props.selectedObject);
        let isNew = this.state.id == -1;
        return (
            <div className={styles.formgroup} hidden={this.props.selected != this.props.title}>
                <label>{isNew ? "Új" : ""} DJ adatai:</label>
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.name}
                    name="name"
                    example="DJ Eddy" label="Név" />
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.url}
                    name="url"
                    example="www.example.com" label="Weboldal" />
                <div className={styles.formgroup}>
                    <input type="submit" value={isNew ? "DJ hozzáadása" : "DJ módosítása"} className={styles.submit} />
                </div>
            </div>
        )
    }
}

export default FormDJ