import React, { useEffect, useState } from 'react';

const EducationForm = (props) => {
    const [current, setCurrent] = useState(0);
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [date, setDate] = useState('');

    const [...data] = props.cvData;
    const key = `${school}_${study}_${date}`;

    useEffect(() => {
        setCurrent(data.length);
    }, [data.length]);

    const updateIndex = (event) => {
        setCurrent(event.target.valueAsNumber);
        setSchool(data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].school : '');
        setStudy(data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].study : '');
        setDate(data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].date : '');
    };

    if (props.edit) {
        return (
            <form id="educationForm" data-index={current} onSubmit={props.onSubmitForm}>
                <label htmlFor="eduSchool">School:</label>
                <input type="text" id="eduSchool" defaultValue={school} key={`School:${key}`} />
                <label htmlFor="eduStudy">Title of Study:</label>
                <input
                    type="text"
                    id="eduStudy"
                    defaultValue={study ? study : ''}
                    key={`Study:${key}`}
                />
                <label htmlFor="eduDate">Date:</label>
                <input
                    type="text"
                    id="eduDate"
                    defaultValue={date ? date : ''}
                    key={`Date:${key}`}
                />
                <input
                    type="number"
                    id="eduIndex"
                    onChange={updateIndex}
                    min="0"
                    max={data.length}
                    defaultValue={data.length}
                />
                <button type="submit">Add Education Experience</button>
            </form>
        );
    }
};

export default EducationForm;
