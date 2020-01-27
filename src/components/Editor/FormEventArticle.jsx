import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../../utils/FetchFunctions';
import { fetchDateToInput } from '../../utils/DateFunctions';
import styles from './Form.module.css';
import SubFormSelect from './SubFormSelect';
import SubFormArticle from './SubFormArticle';
import SubFormPoster from './SubFormPoster';
import DeleteButton from './DeleteButton';

const initialState = {
    title: undefined,
    photo: undefined,
    published_at: undefined,
    content: undefined,
};

class FormEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            ...initialState,
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
        if (selectedObject.id < 0) {
            this.setState({
                ...initialState,
                id: -1,
            });
        } else {
            this.setState({
                ...initialState,
                ...selectedObject,
                published_at: fetchDateToInput(selectedObject.published_at),
            });
        }
    }

    handleChange = (event) => {
        const { name } = event.target;
        if (event.target.value === 'null') {
            this.setState({ [name]: null });
            return;
        }
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id < 0) {
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
            selectedForm, id,
        } = this.state;
        const {
            fetchFunction,
        } = this.props;
        return (
            <div className={styles.main} key="FormEventParty">
                <DeleteButton id={id} type="articles" fetchFunction={fetchFunction} />
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
