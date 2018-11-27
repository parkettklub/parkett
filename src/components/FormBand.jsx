import React from 'react'
import styles from './Form.module.css'
import FormSimpleInput from './FormSimpleInput'
import FormBase from './FormBase';

class FormBand extends FormBase {
    render() {
        this.LoadObject(this.props.selectedObject);
        let isNew = this.state.id == -1;
        return (
            <div className={styles.formgroup} hidden={this.props.selected != this.props.title}>
                <label>{isNew ? "Új" : ""} Banda adatai:</label>
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.name}
                    name="name"
                    example="Pedrofon" label="Név" />
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.url}
                    name="url"
                    example="www.example.com" label="Weboldal" />
                <div className={styles.formgroup}>
                    <input type="submit" className={styles.submit}
                        value={isNew ? "Zenekar hozzáadása" : "Zenekar módosítása"} />
                </div>
            </div>
        )
    }
}

export default FormBand