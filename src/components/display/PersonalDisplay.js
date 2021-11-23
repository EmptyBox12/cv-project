/* eslint-disable no-useless-constructor */
import React from "react";
//css
import personalDisplayCss from "../../styles/display/personalDisplay.module.css";

export function PersonalDisplay(props) {
  return (
    <div className={personalDisplayCss.container}>
      <p className={personalDisplayCss.title}>Personal Information</p>
      <p className={personalDisplayCss.name}>{props.personalInfo.name}</p>
      <div className={personalDisplayCss.contact}>
        <p className={personalDisplayCss.mail}> {props.personalInfo.email}</p>
        <p className={personalDisplayCss.tel}>
          {props.personalInfo.phoneNumber}
        </p>
      </div>
    </div>
  );
}
