/* eslint-disable no-useless-constructor */
import React from "react";

export class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className="sectionTitle">Education</p>
        <button onClick={this.props.clickAddEducation}>Add Education</button>
        {this.props.educationArray.map((education, index) => {
          return (
            <div key={education.id}>
              <div className="leftSide">
                <input
                  type="text"
                  name="schoolName"
                  placeholder="Marmara University"
                  value={education.schoolName}
                  onChange={this.props.handleEducationChange}
                  data-id={index}
                />
                <input
                  type="text"
                  name="major"
                  placeholder="Business Administration"
                  value={education.major}
                  onChange={this.props.handleEducationChange}
                  data-id={index}
                />
              </div>
              <div className="rightSide">
                <button
                  data-id={index}
                  onClick={this.props.clickDeleteEducation}
                >
                  Delete
                </button>
                <div className="dates">
                  <input
                    type="month"
                    name="startDate"
                    value={education.startDate}
                    onChange={this.props.handleEducationChange}
                    data-id={index}
                  />
                  <input
                    type="month"
                    name="endDate"
                    value={education.endDate}
                    onChange={this.props.handleEducationChange}
                    data-id={index}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
