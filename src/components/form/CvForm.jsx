import React, { Component } from 'react';
import EducationForm from './EducationForm';
import GeneralForm from './GeneralForm';
import PracticalForm from './PracticalForm';
import '../../styles/forms.css';
class CvForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...data } = this.props.cvData;

        return (
            <div id="cv-forms">
                <div>
                    <button
                        id="btn-cv-edit-general"
                        className="btn-cvedit"
                        onClick={this.props.cvEdit}
                    >
                        Edit General
                    </button>
                    <button
                        id="btn-cv-edit-education"
                        className="btn-cvedit"
                        onClick={this.props.cvEdit}
                    >
                        Edit Education
                    </button>
                    <button
                        id="btn-cv-edit-practical"
                        className="btn-cvedit"
                        onClick={this.props.cvEdit}
                    >
                        Edit Practical
                    </button>
                </div>
                <GeneralForm
                    onSubmitForm={this.props.formSubmit}
                    cvData={data.general}
                    edit={this.props.editMode.general}
                />
                <EducationForm
                    onSubmitForm={this.props.formSubmit}
                    cvData={data.education}
                    edit={this.props.editMode.education}
                />
                <PracticalForm
                    onSubmitForm={this.props.formSubmit}
                    cvData={data.practical}
                    edit={this.props.editMode.practical}
                />
            </div>
        );
    }
}

export default CvForm;
