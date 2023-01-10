import './App.css';
import React, { Component } from 'react';
import CvForm from './components/form/CvForm';
import Cv from './components/cv/Cv';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        } else if (event.target.id === 'practicalForm') {
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
            }));
        }
    };

    componentDidUpdate = () => {
        console.table(this.state);
    };

    render() {
        return (
            <div id="app">
                <CvForm formSubmit={this.handleFormSubmit} />
                <Cv cvData={this.state} />
            </div>
        );
    }
}

export default App;
