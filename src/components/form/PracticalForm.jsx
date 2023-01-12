import React, { useState, useEffect } from 'react';

const PracticalForm = (props) => {
    const [current, setCurrent] = useState(0);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [...data] = props.cvData;
    const key = `${company}_${position}_${startDate}_${endDate}`;

    useEffect(() => {
        setCurrent(data.length);
    }, [data.length]);

    const updateIndex = (event) => {
        setCurrent(event.target.valueAsNumber);
        setCompany(
            data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].company : '',
        );
        setPosition(
            data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].position : '',
        );
        setDescription(
            data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].description : '',
        );
        setStartDate(
            data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].startDate : '',
        );
        setEndDate(
            data[event.target.valueAsNumber] ? data[event.target.valueAsNumber].endDate : '',
        );
    };

    if (props.edit) {
        return (
            <form id="practicalForm" data-index={current} onSubmit={props.onSubmitForm}>
                <label htmlFor="pracCompany">Company:</label>
                <input type="text" id="pracCompany" defaultValue={company} key={`Company:${key}`} />
                <label htmlFor="pracPosition">Position:</label>
                <input
                    type="text"
                    id="pracPosition"
                    defaultValue={position}
                    key={`Position:${key}`}
                />
                <label htmlFor="pracDescription">Description:</label>
                <input
                    type="text"
                    id="pracDescription"
                    defaultValue={description}
                    key={`Description:${key}`}
                />
                <label htmlFor="pracStartDate">Start Date:</label>
                <input
                    type="text"
                    id="pracStartDate"
                    defaultValue={startDate}
                    key={`StartDate:${key}`}
                />
                <label htmlFor="pracEndDate">End Date:</label>
                <input type="text" id="pracEndDate" defaultValue={endDate} key={`EndDate:${key}`} />
                <input
                    type="number"
                    id="pracIndex"
                    onChange={updateIndex}
                    min="0"
                    max={data.length}
                    defaultValue={data.length}
                />
                <button type="submit">Add Practical Experience</button>
            </form>
        );
    }
};

export default PracticalForm;
