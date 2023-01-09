import React, { Component } from 'react';

class GeneralForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
        };
    }

    handleInput = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    render() {
        return (
            <div>
                <form className="generalForm" onSubmit={this.props.onSubmitForm}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleInput} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={this.handleInput} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" onChange={this.handleInput} />
                    <button type="submit">Add General Info</button>
                </form>
                <div></div>
            </div>
        );
    }
}

export default GeneralForm;
