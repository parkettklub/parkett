import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import Plakat01 from './Plakat.png';
import styles from './Form.module.css';
import FormSelect from './FormSelect';
import EditArticleTitle from './EditArticleTitle';
import EditPoster from './EditPoster';

class EditEventArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            photo: '',
            publishedAt: '',
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
            const date = new Date(selectedObject.published_at);
            const dateString = date.toISOString().slice(0, 16);
            this.setState({
                publishedAt: dateString,
                ...selectedObject,
            });
        }
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = this.state;
        if (id === -1) {
            this.addArticle();
        } else {
            this.updateArticle();
        }
    }

    addArticle = () => {
        const {
            title, content, publishedAt, photo,
        } = this.state;
        const article = {
            title,
            content,
            published_at: publishedAt,
            photo,
        };
        fetchPost('articles', article).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateArticle = () => {
        const {
            id, title, content, publishedAt, photo,
        } = this.state;
        const article = {
            id,
            title,
            content,
            published_at: publishedAt,
            photo,
        };
        fetchPut('articles', article, id).then(() => {
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
            <div className={styles.main} key="EditEventparty">
                <div className={styles.steps}>
                    <FormSelect
                        title="title"
                        selected={selectedForm}
                        onClick={() => this.changeTab('title')}
                        label="Alap adatok"
                    />
                    <FormSelect
                        title="poster"
                        selected={selectedForm}
                        onClick={() => this.changeTab('poster')}
                        label="Plakát"
                    />
                </div>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        <EditArticleTitle
                            form="title"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <EditPoster
                            form="poster"
                            handleChange={this.handleChange}
                            {...this.state}
                        />
                        <div className={styles.formgroup}>
                            <input type="submit" value="Submit" className={styles.submit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

EditEventArticle.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

EditEventArticle.defaultProps = {
    selected: '',
    title: '',
};

export default EditEventArticle;
