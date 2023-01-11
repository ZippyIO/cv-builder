import React, { Component } from 'react';

class EducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            school: '',
            study: '',
            date: '',
        };
    }

    updateIndex = (event) => {
        this.setState({
            current: event.target.valueAsNumber,
            school: this.props.cvData[event.target.valueAsNumber].school,
            study: this.props.cvData[event.target.valueAsNumber].study,
            date: this.props.cvData[event.target.valueAsNumber].date,
        });
    };

    submitFormIndex = (event) => {
        this.setState(
            {
                current: event.target.eduIndex.valueAsNumber,
            },
            () => this.props.onSubmitForm(event),
        );
    };

    render() {
        const key = `${this.state.school}_${this.state.study}_${this.state.date}`;
        const [...data] = this.props.cvData;

        if (this.props.edit) {
            return (
                <form
                    id="educationForm"
                    data-index={this.state.current}
                    onSubmit={this.submitFormIndex}
                >
                    <label htmlFor="eduSchool">School:</label>
                    <input
                        type="text"
                        id="eduSchool"
                        defaultValue={this.state.school}
                        key={`School:${key}`}
                    />
                    <label htmlFor="eduStudy">Title of Study:</label>
                    <input
                        type="text"
                        id="eduStudy"
                        defaultValue={this.state.study ? this.state.study : ''}
                        key={`Study:${key}`}
                    />
                    <label htmlFor="eduDate">Date:</label>
                    <input
                        type="text"
                        id="eduDate"
                        defaultValue={this.state.date ? this.state.date : ''}
                        key={`Date:${key}`}
                    />
                    <input
                        type="number"
                        id="eduIndex"
                        onChange={this.updateIndex}
                        min="0"
                        max={data.length}
                        defaultValue={data.length}
                    />
                    <button type="submit">Add Education Experience</button>
                </form>
            );
        }
    }
}

export default EducationForm;
