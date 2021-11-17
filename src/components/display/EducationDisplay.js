/* eslint-disable no-useless-constructor */
import React from "react";
//css
import educationDisplayCss from "../../styles/display/educationDisplay.module.css";

export class EducationDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={educationDisplayCss.container}>
        <p className={educationDisplayCss.title}>Education</p>
        {this.props.educationArray.map((education) => {
          return (
            <div className={educationDisplayCss.content} key={education.id}>
              <div className={educationDisplayCss.leftSide}>
                <p className={educationDisplayCss.schoolName}>
                  {education.schoolName}
                </p>
                <p className={educationDisplayCss.major}>{education.major}</p>
              </div>
              <div className={educationDisplayCss.rightSide}>
                <p>{education.startDate} - </p>
                <p>{education.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
