/* eslint-disable no-useless-constructor */
import React from "react";
//css
import personalEditCss from "../../styles/edit/personalEdit.module.css";

export class PersonalEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={personalEditCss.container}>
        <p className={personalEditCss.title}>Personal Information</p>
        <div className="name">
          <input
            className={personalEditCss.nameInput}
            type="text"
            placeholder="John Smith"
            name="name"
            value={this.props.personalInfo.name}
            onChange={this.props.handlePersonalChange}
          />
        </div>
        <div className={personalEditCss.contact}>
          <input
            className={personalEditCss.mailInput}
            type="email"
            name="email"
            placeholder="example@test.com"
            value={this.props.personalInfo.email}
            onChange={this.props.handlePersonalChange}
          />
          <input
            className={personalEditCss.telInput}
            type="tel"
            name="phoneNumber"
            placeholder="xxx-xxx-xxx"
            value={this.props.personalInfo.phoneNumber}
            onChange={this.props.handlePersonalChange}
          />
        </div>
      </div>
    );
  }
}
