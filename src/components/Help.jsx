import React from 'react';
import SelectableElement from './SelectableElement';
import FormBand from './FormBand';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class Help extends React.Component {
    constructor() {
        super();
        this.state = {
            djs: [],
            name: 'Example',
            color: 'red',
            image: '',
        };
        // this.fileInput = React.createRef();
    }

    fetchDJs = () => {
        fetch('http://parkett-klub.herokuapp.com/djs/').then(function (response) {
            return response.json();
        }).then((myJson) => {
            console.log(myJson[0]);
            this.setState({ djs: myJson });
        });
    }

    addDJ = () => {
        const dj = {
            name: 'Uj Name',
            content: 'Uj Content',
        }
        fetch('http://parkett-klub.herokuapp.com/djs', {
            method: 'POST',
            body: JSON.stringify(dj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (response) {
            return response.json();
        }).then((myJson) => {
            console.log(myJson);
            this.fetchDJs();
        });
    }

    componentDidMount() {
        this.fetchDJs();
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        /* console.log(
             `Selected file - ${
             this.fileInput.current.files[0].name
             }`
         );*/
    }

    /*<div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Upload file:
                        <input type="file" ref={this.fileInput} />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div> */

    render() {
        return (
            <div className={styles.center}>
                <div>
                    Button
                    </div>
                {this.state.djs.map((entity) => (
                    <div>
                        {entity.id},{entity.name},{entity.color}, {entity.image}
                    </div>
                ))}
            </div>
        );
    }
}

export default Help;
