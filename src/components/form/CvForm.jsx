import React, { Component } from 'react';
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
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            general: {
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
            },
        });
    };

    render() {
        return (
            <div>
                <GeneralForm onSubmitForm={this.handleFormSubmit} />
                <div>
                    <p>{this.state.general.name}</p>
                    <p>{this.state.general.email}</p>
                    <p>{this.state.general.phone}</p>
                </div>
            </div>
        );
    }
}

export default CvForm;