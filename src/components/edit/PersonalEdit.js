/* eslint-disable no-useless-constructor */
import React from "react";
//css
import personalEditCss from "../../styles/edit/personalEdit.module.css";

export function PersonalEdit(props) {
  return (
    <div className={personalEditCss.container}>
      <p className={personalEditCss.title}>Personal Information</p>
      <div className="name">
        <input
          className={personalEditCss.nameInput}
          type="text"
          placeholder="John Smith"
          name="name"
          value={props.personalInfo.name}
          onChange={props.handlePersonalChange}
        />
      </div>
      <div className={personalEditCss.contact}>
        <input
          className={personalEditCss.mailInput}
          type="email"
          name="email"
          placeholder="example@test.com"
          value={props.personalInfo.email}
          onChange={props.handlePersonalChange}
        />
        <input
          className={personalEditCss.telInput}
          type="tel"
          name="phoneNumber"
          placeholder="xxx-xxx-xxx"
          value={props.personalInfo.phoneNumber}
          onChange={props.handlePersonalChange}
        />
      </div>
    </div>
  );
}
