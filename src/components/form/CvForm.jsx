import React, { Component } from 'react';
import EducationForm from './EducationForm';
import GeneralForm from './GeneralForm';

class CvForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            general: {
                name: '',
                email: '',
                phone: '',
            },
            education: [],
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (event.target.id === 'generalForm') {
            this.setState({
                general: {
                    name: event.target.name.value,
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                },
            });
        } else if (event.target.id === 'educationForm') {
            this.setState((prevState) => ({
                education: [
                    ...prevState.education,
                    {
                        school: event.target.eduSchool.value,
                        study: event.target.eduStudy.value,
                        date: event.target.eduDate.value,
                    },
                ],
            }));
        }
    };

    render() {
        return (
            <div>
                <GeneralForm onSubmitForm={this.handleFormSubmit} />
                <EducationForm onSubmitForm={this.handleFormSubmit} />
                <div>
                    <h3>General</h3>
                    <p>Name: {this.state.general.name}</p>
                    <p>Email: {this.state.general.email}</p>
                    <p>Phone: {this.state.general.phone}</p>
                    <h3>Education</h3>
                    {this.state.education.map((obj, index) => {
                        return (
                            <div key={`${obj.school}_${obj.study}_${obj.date}`}>
                                <p>School: {obj.school}</p>
                                <p>Study: {obj.study}</p>
                                <p>Date: {obj.date}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CvForm;
