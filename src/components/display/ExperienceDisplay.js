/* eslint-disable no-useless-constructor */
import React from "react";
//css
import experienceDisplayCss from "../../styles/display/experienceDisplay.module.css";


export class ExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = {experienceDisplayCss.container}>
        <p className={experienceDisplayCss.title}>Experiences</p>
        {this.props.experienceArray.map((experience) => {
          return (
            <div className = {experienceDisplayCss.content} key={experience.id}>
              <div className= {experienceDisplayCss.leftSide}>
                <p className={experienceDisplayCss.companyName} >{experience.companyName}</p>
                <p className= {experienceDisplayCss.companyPosition}>{experience.position}</p>
                <textarea
                  className={experienceDisplayCss.companyDescription}
                  name="description"
                  value={experience.description}
                  readOnly = "true"
                  cols="50"
                  rows="3"
                ></textarea>
              </div>
              <div className={experienceDisplayCss.dates}>
                <p>{experience.startDate}-</p>
                <p>{experience.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
