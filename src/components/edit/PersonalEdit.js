/* eslint-disable no-useless-constructor */
import React from "react";

export class PersonalEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className="sectionTitle">Personal Information</p>
        <div className="name">
          <input
            type="text"
            placeholder="John Smith"
            name="name"
            value={this.props.personalInfo.name}
            onChange={this.props.handlePersonalChange}
          />
        </div>
        <div className="contact">
          <input
            type="email"
            name="email"
            placeholder = "example@test.com"
            value={this.props.personalInfo.email}
            onChange={this.props.handlePersonalChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder = "xxx-xxx-xxx"
            value={this.props.personalInfo.phoneNumber}
            onChange={this.props.handlePersonalChange}
          />
        </div>
      </div>
    );
  }
}
