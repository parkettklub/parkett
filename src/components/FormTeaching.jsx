import React from 'react'
import styles from './EditEvent.module.css'
import FormSimpleInput from './FormSimpleInput'
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class FormTeaching extends React.Component {
    constructor() {
        super();
        this.state = {
            level: "kezdő",
            length: "20hr",
            teacherid: 1,
            danceid: 1,
            addSelected: null
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

    addNewElement(name) {
        this.setState({ addSelected: name })
    }

    close() {
        this.setState({ addSelected: null })
    }

    render() {
        const dances = [{
            id: 1,
            name: "kizomba"
        }, {
            id: 2,
            name: "salsa"
        },];
        const danceOptions = []
        dances.forEach((dance) => {
            danceOptions.push(<option value={dance.id} key={dance.id}>{dance.id} - {dance.name}</option>)
        });

        const teachers = [{
            id: 1,
            name: "Martin és Gelda"
        }, {
            id: 2,
            name: "Ede és Emese és a törpe"
        }];

        const teacherOptions = [];
        teachers.forEach((teacher) => {
            teacherOptions.push(<option value={teacher.id} key={teacher.id}>{teacher.id} - {teacher.name}</option>)
        });
        return (
            <div className={styles.formgroup} hidden={this.props.selected != this.props.title}>
                <label>Új Tanítás adatai:</label>
                <FormSelectInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.danceid}
                    name="danceid"
                    label="Dance" options={danceOptions} addNew={() => this.addNewElement("dance")} close={() => this.close()} />
                <FormDance selected={this.state.addSelected} title="dance" />
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.level}
                    name="level"
                    example="Pedrofon" label="Név" />
                <FormSimpleInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.length}
                    name="length"
                    example="www.example.com" label="Url" />
                <FormSelectInput selected={this.props.selected} title={this.props.title}
                    handleChange={this.handleChange} value={this.state.teacherid}
                    name="teacherid"
                    label="Teacher" options={teacherOptions} addNew={() => this.addNewElement("teacher")} close={() => this.close()} />
                <FormTeacher selected={this.state.addSelected} title="teacher" />
                <div className={styles.formgroup}>
                    <input type="submit" value="Tanítás hozzáadása" className={styles.submit} />
                </div>
            </div>
        )
    }
}

export default FormTeaching