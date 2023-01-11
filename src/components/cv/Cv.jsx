import React, { Component } from 'react';
import '../../styles/cv.css';

class Cv extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...data } = this.props.cvData;

        return (
            <div id="cv">
                <div id="cv-general">
                    <p>Name: {data.general.name}</p>
                    <p>Email: {data.general.email}</p>
                    <p>Phone: {data.general.phone}</p>
                </div>
                <div id="cv-education">
                    <h3>Education</h3>
                    {data.education.map((obj) => {
                        return (
                            <div
                                className="edu-item"
                                key={`${obj.school}_${obj.study}_${obj.date}`}
                            >
                                <p>School: {obj.school}</p>
                                <p>Study: {obj.study}</p>
                                <p>Date: {obj.date}</p>
                            </div>
                        );
                    })}
                </div>
                <div id="cv-practical">
                    <h3>Practical</h3>
                    {data.practical.map((obj) => {
                        return (
                            <div
                                className="prac-item"
                                key={`${obj.company}_${obj.position}_${obj.startDate}_${obj.endDate}`}
                            >
                                <p>Company: {obj.company}</p>
                                <p>Position: {obj.position}</p>
                                <p>Description: {obj.description}</p>
                                <p>Start Date: {obj.startDate}</p>
                                <p>End Date: {obj.endDate}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Cv;
