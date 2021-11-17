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
      <div>
        <p className={educationDisplayCss.sectionTitle}>Education</p>
        {this.props.educationArray.map((education) => {
          return (
            <div key={education.id}>
              <div className="leftSide">
                <p>{education.schoolName}</p>
                <p>{education.major}</p>
              </div>
              <div className="rightSide">
                <p>{education.startDate}</p>
                <p>{education.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
