/* eslint-disable no-useless-constructor */
import React from "react";
//css
import experienceEditCss from "../../styles/edit/experienceEdit.module.css";

export function ExperienceEdit(props) {
  return (
    <div className={experienceEditCss.container}>
      <p className={experienceEditCss.title}>Experiences</p>
      <button
        className={experienceEditCss.addExperience}
        onClick={props.clickAddExperience}
      >
        Add Experience
      </button>
      {props.experienceArray.map((experience, index) => {
        return (
          <div className={experienceEditCss.content} key={experience.id}>
            <div className={experienceEditCss.leftSide}>
              <input
                className={experienceEditCss.companyName}
                type="text"
                name="companyName"
                placeholder="Apple Inc"
                value={experience.companyName}
                onChange={props.handleExperienceChange}
                data-id={index}
              />
              <input
                className={experienceEditCss.companyPosition}
                type="text"
                name="position"
                placeholder="Senior Developer"
                value={experience.position}
                onChange={props.handleExperienceChange}
                data-id={index}
              />

              <textarea
                className={experienceEditCss.companyDescription}
                name="description"
                data-id={index}
                value={experience.description}
                onChange={props.handleExperienceChange}
                placeholder="I worked with React to create single page applications for Apple"
                cols="50"
                rows="3"
              ></textarea>
            </div>
            <div className={experienceEditCss.rightSide}>
              <button
                className={experienceEditCss.deleteButton}
                data-id={index}
                onClick={props.clickDeleteExperience}
              >
                Delete
              </button>
              <div className={experienceEditCss.dates}>
                <input
                  type="month"
                  name="startDate"
                  value={experience.startDate}
                  onChange={props.handleExperienceChange}
                  data-id={index}
                />
                -
                <input
                  type="month"
                  name="endDate"
                  value={experience.endDate}
                  onChange={props.handleExperienceChange}
                  data-id={index}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
