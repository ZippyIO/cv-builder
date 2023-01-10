import React, { Component } from 'react';
import EducationForm from './EducationForm';
import GeneralForm from './GeneralForm';
import PracticalForm from './PracticalForm';

class CvForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="cv-forms">
                <GeneralForm onSubmitForm={this.props.formSubmit} />
                <EducationForm onSubmitForm={this.props.formSubmit} />
                <PracticalForm onSubmitForm={this.props.formSubmit} />
            </div>
        );
    }
}

export default CvForm;
