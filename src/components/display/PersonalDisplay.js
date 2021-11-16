/* eslint-disable no-useless-constructor */
import React from "react";

export class PersonalDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className="sectionTitle">Personal Information</p>
        <p>{this.props.personalInfo.name}</p>
        <div>
          <p>{this.props.personalInfo.email}</p>
          <p>{this.props.personalInfo.phoneNumber}</p>
        </div>
      </div>
    );
  }
}
