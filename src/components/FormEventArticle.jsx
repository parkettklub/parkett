import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import { fetchDateToInput } from './DateFunctions';
import styles from './Form.module.css';
import SubFormSelect from './SubFormSelect';
import SubFormArticle from './SubFormArticle';
import SubFormPoster from './SubFormPoster';

class FormEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            photo: '',
            published_at: '',
            content: '',
            selectedForm: 'title',
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setObject(selectedObject);
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setObject(selectedObject);
    }

    setObject = (selectedObject) => {
        if (selectedObject.id === -1) {
            this.setState({
                id: -1,
            });
        } else {
            this.setState({
                ...selectedObject,
                published_at: fetchDateToInput(selectedObject.published_at),
            });
        }
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id === -1) {
            this.addArticle();
        } else {
            this.updateArticle();
        }
    }

    addArticle = () => {
        fetchPost('articles', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateArticle = () => {
        fetchPut('articles', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
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
            <div className={styles.main} key="FormEventParty">
                <div className={styles.steps}>
                    <SubFormSelect
                        title="title"
                        selected={selectedForm}
                        onClick={() => this.changeTab('title')}
                        label="Alap adatok"
                    />
                    <SubFormSelect
                        title="poster"
                        selected={selectedForm}
                        onClick={() => this.changeTab('poster')}
                        label="Plakát"
                    />
                </div>
                <div className={styles.form}>
                    <SubFormArticle
                        form="title"
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <SubFormPoster
                        form="poster"
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {'Mentés'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormEventArticle.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormEventArticle.defaultProps = {
    selected: '',
    title: '',
};

export default FormEventArticle;
