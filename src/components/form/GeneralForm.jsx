import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form id="generalForm" className="generalForm" onSubmit={this.props.onSubmitForm}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" />
                    <button type="submit">Add General Info</button>
                </form>
                <div></div>
            </div>
        );
    }
}

export default GeneralForm;
