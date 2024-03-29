/* eslint-disable no-useless-constructor */
import React from "react";
//css
import educationDisplayCss from "../../styles/display/educationDisplay.module.css";

export function EducationDisplay(props) {
  return (
    <div className={educationDisplayCss.container}>
      <p className={educationDisplayCss.title}>Education</p>
      {props.educationArray.map((education) => {
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
