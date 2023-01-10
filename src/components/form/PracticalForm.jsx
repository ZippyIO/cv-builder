import React, { Component } from 'react';

class PracticalForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="practicalForm" onSubmit={this.props.onSubmitForm}>
                <label htmlFor="pracCompany">Company:</label>
                <input type="text" id="pracCompany" />
                <label htmlFor="pracPosition">Position:</label>
                <input type="text" id="pracPosition" />
                <label htmlFor="pracDescription">Description:</label>
                <input type="text" id="pracDescription" />
                <label htmlFor="pracDescription">Start Date:</label>
                <input type="text" id="pracStartDate" />
                <label htmlFor="pracDescription">End Date:</label>
                <input type="text" id="pracEndDate" />
                <button type="submit">Add Practical Experience</button>
            </form>
        );
    }
}

export default PracticalForm;
