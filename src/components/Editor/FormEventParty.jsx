import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut, fetchAll } from '../../utils/FetchFunctions';
import { fetchDateToInput } from '../../utils/DateFunctions';
import styles from './Form.module.css';
import SubFormSelect from './SubFormSelect';
import SubFormTitleAndDate from './SubFormTitleAndDate';
import SubFormPoster from './SubFormPoster';
import SubFormDetails from './SubFormDetails';
import SubFormMedia from './SubFormMedia';
import SubFormMusicDanceCourse from './SubFormMusicDanceCourse';
import DeleteButton from './DeleteButton';

const initialState = {
    title: '',
    photo: undefined,
    start_date: undefined,
    end_date: undefined,
    program: '',
    content: '',
    facebook_event: undefined,
    spot: undefined,
    bss: undefined,
    dance_course_id: undefined,
    dance_type_id: undefined,
    band_ids: [],
    dj_ids: [],
};

class FormEventParty extends React.Component {
    constructor() {
        super();
        this.state = {
            ...initialState,
            selectedForm: 'title',
            addSelected: null,
            fetched: false,
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
                ...initialState,
                fetched: true,
            });
        } else {
            this.fetchEvent(selectedObject.id);
        }
    }

    fetchEvent = (id) => {
        fetchAll(`parties/${id}`).then((myJson) => {
            this.setState({
                ...initialState,
                ...myJson,
                start_date: fetchDateToInput(myJson.start_date),
                end_date: fetchDateToInput(myJson.end_date),
                band_ids: myJson.bands.map(band => band.id),
                dj_ids: myJson.djs.map(dj => dj.id),
                fetched: true,
            });
        });
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
        if (event.target.value === 'null') {
            this.setState({ [name]: null });
            return;
        }
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
        fetchPut('parties', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const {
            selectedForm, id, fetched,
        } = this.state;
        const {
            fetchFunction,
        } = this.props;
        if (!fetched) {
            return (<div className={styles.main} key="FormEventParty" />);
        }
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
