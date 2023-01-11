import React, { Component } from 'react';

class PracticalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            company: '',
            position: '',
            description: '',
            startDate: '',
            endDate: '',
        };
    }

    updateIndex = (event) => {
        this.setState({
            current: event.target.valueAsNumber,
            company: this.props.cvData[event.target.valueAsNumber].company,
            position: this.props.cvData[event.target.valueAsNumber].position,
            description: this.props.cvData[event.target.valueAsNumber].description,
            startDate: this.props.cvData[event.target.valueAsNumber].startDate,
            endDate: this.props.cvData[event.target.valueAsNumber].endDate,
        });
    };

    submitFormIndex = (event) => {
        this.setState(
            {
                current: event.target.pracIndex.valueAsNumber,
            },
            () => this.props.onSubmitForm(event),
        );
    };

    render() {
        const key = `
        ${this.state.company}_${this.state.position}_
        ${this.state.startDate}_${this.state.endDate}`;
        const [...data] = this.props.cvData;

        if (this.props.edit) {
            return (
                <form
                    id="practicalForm"
                    data-index={this.state.current}
                    onSubmit={this.submitFormIndex}
                >
                    <label htmlFor="pracCompany">Company:</label>
                    <input
                        type="text"
                        id="pracCompany"
                        defaultValue={this.state.company}
                        key={`Company:${key}`}
                    />
                    <label htmlFor="pracPosition">Position:</label>
                    <input
                        type="text"
                        id="pracPosition"
                        defaultValue={this.state.position}
                        key={`Position:${key}`}
                    />
                    <label htmlFor="pracDescription">Description:</label>
                    <input
                        type="text"
                        id="pracDescription"
                        defaultValue={this.state.description}
                        key={`Description:${key}`}
                    />
                    <label htmlFor="pracStartDate">Start Date:</label>
                    <input
                        type="text"
                        id="pracStartDate"
                        defaultValue={this.state.startDate}
                        key={`StartDate:${key}`}
                    />
                    <label htmlFor="pracEndDate">End Date:</label>
                    <input
                        type="text"
                        id="pracEndDate"
                        defaultValue={this.state.endDate}
                        key={`EndDate:${key}`}
                    />
                    <input
                        type="number"
                        id="pracIndex"
                        onChange={this.updateIndex}
                        min="0"
                        max={data.length}
                        defaultValue={data.length}
                    />
                    <button type="submit">Add Practical Experience</button>
                </form>
            );
        }
    }
}

export default PracticalForm;
