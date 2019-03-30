import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import { fetchDateToInput } from './DateFunctions';
import styles from './Form.module.css';
import SubFormSelect from './SubFormSelect';
import SubFormTitleAndDate from './SubFormTitleAndDate';
import SubFormPoster from './SubFormPoster';
import SubFormDetails from './SubFormDetails';
import SubFormMedia from './SubFormMedia';
import SubFormMusicDanceCourse from './SubFormMusicDanceCourse';
import DeleteButton from './DeleteButton';

class FormEventParty extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            photo: '',
            start_date: '',
            end_date: '',
            program: '',
            content: '',
            facebook_event: '',
            spot: '',
            bss: '',
            dance_course_id: 1,
            bandids: [
                1,
                2,
            ],
            djids: [
                1,
                3,
            ],
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
                id: -1,
            });
        } else {
            this.setState({
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
            this.addParty();
        } else {
            this.updateParty();
        }
    }

    addParty = () => {
        fetchPost('parties', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateParty = () => {
        fetchPut('parties', { ...this.state, dance_course_id: null }).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
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
                <DeleteButton id={id} type="parties" fetchFunction={fetchFunction} />
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
                        title="media"
                        selected={selectedForm}
                        onClick={() => this.changeTab('media')}
                        label="SPOT és BSS"
                    />
                    <SubFormSelect
                        title="music"
                        selected={selectedForm}
                        onClick={() => this.changeTab('music')}
                        label="Zene és Tanítás"
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
                    <SubFormMedia
                        form="media"
                        handleChange={this.handleChange}
                        {...this.state}
                    />
                    <SubFormMusicDanceCourse
                        form="music"
                        handleChange={this.handleChange}
                        handleMultiple={this.handleMultiple}
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

FormEventParty.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormEventParty.defaultProps = {
    selected: '',
    title: '',
};

export default FormEventParty;
