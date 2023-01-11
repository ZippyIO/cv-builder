import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...data } = this.props.cvData;
        if (this.props.edit) {
            return (
                <form id="generalForm" onSubmit={this.props.onSubmitForm}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" defaultValue={data.name} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" defaultValue={data.email} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" defaultValue={data.phone} />
                    <button type="submit">Add General Info</button>
                </form>
            );
        }
    }
}

export default GeneralForm;
