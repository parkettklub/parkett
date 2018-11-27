import React from 'react'
import styles from './Form.module.css'
import FormSimpleInput from './FormSimpleInput'
import FormTextareaInput from './FormTextareaInput'
import FormBase from './FormBase';

class FormDance extends FormBase {
    render() {
        this.LoadObject(this.props.selectedObject);
        let isNew = this.state.id == -1;
        return (
            <div className={styles.formgroup} hidden={this.props.selected != this.props.title}>
                <label>{isNew ? "Új" : ""} Tánc adatai:</label>
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.name}
                    name="name"
                    example="salsa" label="Név" />
                <FormTextareaInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.content}
                    name="content"
                    example="Ez a tánc a legeslegjobb" label="Leírás" />
                <div className={styles.formgroup}>
                    <input type="submit" className={styles.submit}
                        value={isNew ? "Tánc hozzáadása" : "Tánc módosítása"} />
                </div>
            </div>
        )
    }
}

export default FormDance