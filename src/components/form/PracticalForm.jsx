import React, { Component } from 'react';

class PracticalForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="practicalForm" onSubmit={this.props.onSubmitForm}>
                    <label htmlFor="pracCompany">Company:</label>
                    <input type="text" id="pracCompany" onChange={this.handleInput} />
                    <label htmlFor="pracPosition">Position:</label>
                    <input type="text" id="pracPosition" onChange={this.handleInput} />
                    <label htmlFor="pracDescription">Description:</label>
                    <input type="text" id="pracDescription" onChange={this.handleInput} />
                    <label htmlFor="pracDescription">Start Date:</label>
                    <input type="text" id="pracStartDate" onChange={this.handleInput} />
                    <label htmlFor="pracDescription">End Date:</label>
                    <input type="text" id="pracEndDate" onChange={this.handleInput} />
                    <button type="submit">Add Practical Experience</button>
                </form>
                <div></div>
            </div>
        );
    }
}

export default PracticalForm;
