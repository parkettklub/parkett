import React from 'react'

class FormBase extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1
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

    LoadObject({ id, ...props }) {
        if (this.props.selectedObject && this.props.selectedObject.id != this.state.id)
            this.setState({
                id: id,
                ...props
            });
    }
}

export default FormBase