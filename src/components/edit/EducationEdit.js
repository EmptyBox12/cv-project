/* eslint-disable no-useless-constructor */
import React from "react";
//css
import educationEditCss from "../../styles/edit/educationEdit.module.css";

export class EducationEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={educationEditCss.container}>
        <p className={educationEditCss.title}>Education</p>
        <button
          className={educationEditCss.addEducation}
          onClick={this.props.clickAddEducation}
        >
          Add Education
        </button>
        {this.props.educationArray.map((education, index) => {
          return (
            <div className={educationEditCss.content} key={education.id}>
              <div className={educationEditCss.leftSide}>
                <input
                  className={educationEditCss.schoolName}
                  type="text"
                  name="schoolName"
                  placeholder="Marmara University"
                  value={education.schoolName}
                  onChange={this.props.handleEducationChange}
                  data-id={index}
                />
                <input
                  className={educationEditCss.major}
                  type="text"
                  name="major"
                  placeholder="Business Administration"
                  value={education.major}
                  onChange={this.props.handleEducationChange}
                  data-id={index}
                />
              </div>
              <div className={educationEditCss.rightSide}>
                <button
                  className = {educationEditCss.deleteButton}
                  data-id={index}
                  onClick={this.props.clickDeleteEducation}
                >
                  Delete
                </button>
                <div className={educationEditCss.dates}>
                  <input
                    type="month"
                    name="startDate"
                    value={education.startDate}
                    onChange={this.props.handleEducationChange}
                    data-id={index}
                  />
                  -
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
