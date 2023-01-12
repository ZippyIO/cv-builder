import './App.css';
import React, { useState } from 'react';
import CvForm from './components/form/CvForm';
import Cv from './components/cv/Cv';

const App = () => {
    const [edit, setEdit] = useState({ general: true, education: true, practical: true });
    const [general, setGeneral] = useState({ name: '', email: '', phone: '' });
    const [education, setEducation] = useState([]);
    const [practical, setPractical] = useState([]);

    const handleFormSubmit = (event) => {
        const index = +event.target.dataset.index;
        event.preventDefault();

        if (event.target.id === 'generalForm') {
            setGeneral({
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
            });
            setEdit({ ...edit, general: false });
        } else if (event.target.id === 'educationForm') {
            if (!education[index]) {
                setEducation([
                    ...education,
                    {
                        school: event.target.eduSchool.value,
                        study: event.target.eduStudy.value,
                        date: event.target.eduDate.value,
                    },
                ]);
                setEdit({ ...edit, education: false });
            } else {
                setEducation([
                    ...education.map((item, i) => {
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
                ]);
            }
        } else if (event.target.id === 'practicalForm') {
            if (!practical[index]) {
                setPractical([
                    ...practical,
                    {
                        company: event.target.pracCompany.value,
                        position: event.target.pracPosition.value,
                        description: event.target.pracDescription.value,
                        startDate: event.target.pracStartDate.value,
                        endDate: event.target.pracEndDate.value,
                    },
                ]);
                setEdit({ ...edit, practical: false });
            } else {
                setPractical([
                    ...practical.map((item, i) => {
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
                ]);
            }
        }
    };

    const handleCvEdit = (event) => {
        if (event.target.id === 'btn-cv-edit-general') {
            setEdit({ ...edit, general: edit.general ? false : true });
        } else if (event.target.id === 'btn-cv-edit-education') {
            setEdit({ ...edit, education: edit.education ? false : true });
        } else if (event.target.id === 'btn-cv-edit-practical') {
            setEdit({ ...edit, practical: edit.practical ? false : true });
        }
    };

    return (
        <div id="app">
            <CvForm
                formSubmit={handleFormSubmit}
                cvData={{ general: general, education: education, practical: practical }}
                editMode={edit}
                cvEdit={handleCvEdit}
            />
            <Cv
                cvData={{ general: general, education: education, practical: practical }}
                cvEdit={handleCvEdit}
            />
        </div>
    );
};

export default App;
