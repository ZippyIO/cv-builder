import React, { Component } from 'react';

class EducationForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="educationForm" onSubmit={this.props.onSubmitForm}>
                    <label htmlFor="eduSchool">School:</label>
                    <input type="text" id="eduSchool" onChange={this.handleInput} />
                    <label htmlFor="eduStudy">Title of Study:</label>
                    <input type="text" id="eduStudy" onChange={this.handleInput} />
                    <label htmlFor="eduDate">Date:</label>
                    <input type="text" id="eduDate" onChange={this.handleInput} />
                    <button type="submit">Add Education Experience</button>
                </form>
                <div></div>
            </div>
        );
    }
}

export default EducationForm;
