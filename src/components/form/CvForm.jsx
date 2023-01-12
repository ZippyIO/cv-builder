import '../../styles/forms.css';
import React from 'react';
import EducationForm from './EducationForm';
import GeneralForm from './GeneralForm';
import PracticalForm from './PracticalForm';

const CvForm = (props) => {
    const { ...data } = props.cvData;

    return (
        <div id="cv-forms">
            <div>
                <button id="btn-cv-edit-general" className="btn-cvedit" onClick={props.cvEdit}>
                    Edit General
                </button>
                <button id="btn-cv-edit-education" className="btn-cvedit" onClick={props.cvEdit}>
                    Edit Education
                </button>
                <button id="btn-cv-edit-practical" className="btn-cvedit" onClick={props.cvEdit}>
                    Edit Practical
                </button>
            </div>
            <GeneralForm
                onSubmitForm={props.formSubmit}
                cvData={data.general}
                edit={props.editMode.general}
            />
            <EducationForm
                onSubmitForm={props.formSubmit}
                cvData={data.education}
                edit={props.editMode.education}
            />
            <PracticalForm
                onSubmitForm={props.formSubmit}
                cvData={data.practical}
                edit={props.editMode.practical}
            />
        </div>
    );
};

export default CvForm;
