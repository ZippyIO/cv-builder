import React, { Component } from 'react';

class Cv extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...data } = this.props.cvData;

        return (
            <div id="cv">
                <h3>General</h3>
                <p>Name: {data.general.name}</p>
                <p>Email: {data.general.email}</p>
                <p>Phone: {data.general.phone}</p>
                <h3>Education</h3>
                {data.education.map((obj, index) => {
                    return (
                        <div key={`${obj.school}_${obj.study}_${obj.date}`}>
                            <p>School: {obj.school}</p>
                            <p>Study: {obj.study}</p>
                            <p>Date: {obj.date}</p>
                        </div>
                    );
                })}
                <h3>Practical</h3>
                {data.practical.map((obj, index) => {
                    return (
                        <div key={`${obj.company}_${obj.position}_${obj.startDate}_${obj.endDate}`}>
                            <p>Company: {obj.company}</p>
                            <p>Position: {obj.position}</p>
                            <p>Description: {obj.description}</p>
                            <p>Start Date: {obj.startDate}</p>
                            <p>End Date: {obj.endDate}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Cv;
