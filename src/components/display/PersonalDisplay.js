/* eslint-disable no-useless-constructor */
import React from "react";
//css
import personalDisplayCss from "../../styles/display/personalDisplay.module.css";


export class PersonalDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = {personalDisplayCss.container}>
        <p className= {personalDisplayCss.title}>Personal Information</p>
        <p className = {personalDisplayCss.name}>{this.props.personalInfo.name}</p>
        <div className = {personalDisplayCss.contact}>
          <p className = {personalDisplayCss.mail}> {this.props.personalInfo.email}</p>
          <p className = {personalDisplayCss.tel}>{this.props.personalInfo.phoneNumber}</p>
        </div>
      </div>
    );
  }
}
