/* eslint-disable no-useless-constructor */
import React from "react";

export class ExperienceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
                <p>{experience.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
