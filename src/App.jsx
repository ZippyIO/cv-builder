import './App.css';
import React, { Component } from 'react';
import CvForm from './components/form/CvForm';
import Cv from './components/cv/Cv';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: {
                general: true,
                education: true,
                practical: true,
            },
            general: {
                name: '',
                email: '',
                phone: '',
            },
            education: [],
            practical: [],
        };
    }

    handleFormSubmit = (event) => {
        const index = +event.target.dataset.index;
        event.preventDefault();

        if (event.target.id === 'generalForm') {
            this.setState((prevState) => ({
                general: {
                    name: event.target.name.value,
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                },
                edit: { ...prevState.edit, general: prevState.edit.general ? false : true },
            }));
        } else if (event.target.id === 'educationForm') {
            if (!this.state.education[index]) {
                this.setState((prevState) => ({
                    education: [
                        ...prevState.education,
                        {
                            school: event.target.eduSchool.value,
                            study: event.target.eduStudy.value,
                            date: event.target.eduDate.value,
                        },
                    ],
                    edit: { ...prevState.edit, education: prevState.edit.education ? false : true },
                }));
            } else {
                this.setState((prevState) => ({
                    education: [
                        ...prevState.education.map((item, i) => {
                            if (index === i) {
                                return {
                                    school: event.target.eduSchool.value,
                                    study: event.target.eduStudy.value,
                                    date: event.target.eduDate.value,
                                };
                            } else {
                                return item;
                            }
                        }),
                    ],
                }));
            }
        } else if (event.target.id === 'practicalForm') {
            if (!this.state.practical[index]) {
                this.setState((prevState) => ({
                    practical: [
                        ...prevState.practical,
                        {
                            company: event.target.pracCompany.value,
                            position: event.target.pracPosition.value,
                            description: event.target.pracDescription.value,
                            startDate: event.target.pracStartDate.value,
                            endDate: event.target.pracEndDate.value,
                        },
                    ],
                    edit: { ...prevState.edit, practical: prevState.edit.practical ? false : true },
                }));
            } else {
                this.setState((prevState) => ({
                    practical: [
                        ...prevState.practical.map((item, i) => {
                            if (index === i) {
                                return {
                                    company: event.target.pracCompany.value,
                                    position: event.target.pracPosition.value,
                                    description: event.target.pracDescription.value,
                                    startDate: event.target.pracStartDate.value,
                                    endDate: event.target.pracEndDate.value,
                                };
                            } else {
                                return item;
                            }
                        }),
                    ],
                }));
            }
        }
    };

    handleCvEdit = (event) => {
        if (event.target.id === 'btn-cv-edit-general') {
            this.setState((prevState) => ({
                edit: { ...prevState.edit, general: prevState.edit.general ? false : true },
            }));
        } else if (event.target.id === 'btn-cv-edit-education') {
            this.setState((prevState) => ({
                edit: { ...prevState.edit, education: prevState.edit.education ? false : true },
            }));
        } else if (event.target.id === 'btn-cv-edit-practical') {
            this.setState((prevState) => ({
                edit: { ...prevState.edit, practical: prevState.edit.practical ? false : true },
            }));
        }
    };

    render() {
        return (
            <div id="app">
                <CvForm
                    formSubmit={this.handleFormSubmit}
                    cvData={this.state}
                    editMode={this.state.edit}
                    cvEdit={this.handleCvEdit}
                />
                <Cv cvData={this.state} cvEdit={this.handleCvEdit} />
            </div>
        );
    }
}

export default App;
