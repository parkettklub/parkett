import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../../utils/FetchFunctions';
import { fetchDateToInput } from '../../utils/DateFunctions';
import styles from './Form.module.css';
import SubFormSelect from './SubFormSelect';
import SubFormTitleAndDate from './SubFormTitleAndDate';
import SubFormDetails from './SubFormDetails';
import SubFormPoster from './SubFormPoster';
import SubFormWorkshop from './SubFormWorkshop';
import InputFormTextarea from './InputFormTextarea';
import DeleteButton from './DeleteButton';

const initialState = {
    title: undefined,
    photo: undefined,
    start_date: undefined,
    end_date: undefined,
    program: undefined,
    content: undefined,
    dance_id: undefined,
    dance_teacher_id: undefined,
    theme: undefined,
    facebook_event: undefined,
    application_form: undefined,
    party_id: undefined,
    dance_type_id: undefined,
};

class FormEventWorkshop extends React.Component {
    constructor() {
        super();
        this.state = {
            ...initialState,
            selectedForm: 'title',
            addSelected: null,
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
                start_date: fetchDateToInput(selectedObject.start_date),
                end_date: fetchDateToInput(selectedObject.end_date),
            });
        }
    }

    handleMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(parseInt(options[i].value, 10));
            }
        }
        const { name } = event.target;
        this.setState({ [name]: value });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    changeTab = (tabName) => {
        this.setState({
            selectedForm: tabName,
        });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id < 0) {
            this.addWorkshop();
        } else {
            this.updateWorkshop();
        }
    }

    addWorkshop = () => {
        fetchPost('workshops', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateWorkshop = () => {
        fetchPut('workshops', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const {
            selectedForm,
            theme,
            id,
        } = this.state;
        const {
            fetchFunction,
        } = this.props;
        return (
            <div className={styles.main} key="FormEventParty">
                <DeleteButton id={id} type="workshops" fetchFunction={fetchFunction} />
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
                    <SubFormSelect
                        title="details"
                        selected={selectedForm}
                        onClick={() => this.changeTab('details')}
                        label="Leírás és Facebook"
                    />
                    <SubFormSelect
                        title="dance"
                        selected={selectedForm}
                        onClick={() => this.changeTab('dance')}
                        label="Tanítás és Form"
                    />
                </div>
                <div className={styles.form}>
                    <SubFormTitleAndDate
                        form="title"
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <SubFormDetails
                        form="details"
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <InputFormTextarea
                        selectedForm={selectedForm}
                        form="details"
                        handleChange={this.handleChange}
                        value={theme}
                        name="theme"
                        example="Egész hónapos tudás ..."
                        label="Tematika:"
                    />
                    <SubFormWorkshop
                        form="dance"
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

FormEventWorkshop.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormEventWorkshop.defaultProps = {
    selected: '',
    title: '',
};

export default FormEventWorkshop;
