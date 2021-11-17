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
      <div>
        <p className="sectionTitle">Experiences</p>
        {this.props.experienceArray.map((experience) => {
          return (
            <div key={experience.id}>
              <div className="leftSide">
                <p>{experience.companyName}</p>
                <p>{experience.position}</p>
                <p>{experience.description}</p>
              </div>
              <div className="rightSide">
                <p>{experience.startDate}</p>
                -
                <p>{experience.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
