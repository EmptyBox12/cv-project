/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import uniqid from "uniqid";
//import css
import "./styles/App.css";
//edit mode
import { PersonalEdit } from "./components/edit/PersonalEdit";
import { EducationEdit } from "./components/edit/EducationEdit";
import { ExperienceEdit } from "./components/edit/ExperienceEdit";
//display mode
import { PersonalDisplay } from "./components/display/PersonalDisplay";
import { EducationDisplay } from "./components/display/EducationDisplay";
import { ExperienceDisplay } from "./components/display/ExperienceDisplay";

function App() {
  //states
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [education, setEducation] = useState([
    {
      schoolName: "",
      major: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    },
  ]);
  const [experience, setExperience] = useState([
    {
      companyName: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    },
  ]);
  const [editMode, setEditMode] = useState(true);
  //personal section
  const handlePersonalChange = (e) => {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value,
    });
  };
  //experience section
  const handleExperienceChange = (e) => {
    let index = e.target.getAttribute("data-id");
    let experienceArray = [...experience];
    experienceArray[index] = {
      ...experience[index],
      [e.target.name]: e.target.value,
    };
    setExperience(experienceArray);
  };
  const clickAddExperience = (e) => {
    let object = {
      companyName: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    setExperience(experience.concat(object));
  };
  const clickDeleteExperience = (e) => {
    let deleteIndex = e.target.getAttribute("data-id");
    let experienceArray = experience.filter((item, index) => {
      if (index !== parseInt(deleteIndex)) {
        return true;
      } else {
        return false;
      }
    });
    setExperience(experienceArray);
  };
  //education section
  const handleEducationChange = (e) => {
    let index = e.target.getAttribute("data-id");
    let educationArray = [...education];
    educationArray[index] = {
      ...education[index],
      [e.target.name]: e.target.value,
    };
    setEducation(educationArray);
  };
  const clickAddEducation = (e) => {
    let object = {
      schoolName: "",
      major: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    setEducation(education.concat(object));
  };
  const clickDeleteEducation = (e) => {
    let deleteIndex = e.target.getAttribute("data-id");
    let educationArray = education.filter((item, index) => {
      if (index !== parseInt(deleteIndex)) {
        return true;
      } else {
        return false;
      }
    });
    setEducation(educationArray);
  };
  //switch from preview to edit or vice versa
  const switchMode = () => {
    setEditMode(editMode ? false : true);
  };
  //render edit and display modes
  const renderEdit = () => {
    return (
      <div>
        <PersonalEdit
          personalInfo={personal}
          handlePersonalChange={handlePersonalChange}
        />
        <ExperienceEdit
          experienceArray={experience}
          handleExperienceChange={handleExperienceChange}
          clickAddExperience={clickAddExperience}
          clickDeleteExperience={clickDeleteExperience}
        />
        <EducationEdit
          educationArray={education}
          handleEducationChange={handleEducationChange}
          clickAddEducation={clickAddEducation}
          clickDeleteEducation={clickDeleteEducation}
        />
      </div>
    );
  };
  const renderDisplay = () => {
    return (
      <div>
        <PersonalDisplay personalInfo={personal} />
        <ExperienceDisplay experienceArray={experience} />
        <EducationDisplay educationArray={education} />
      </div>
    );
  };
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">CV Creator</h1>
      </div>
      <div className="content">
        {editMode ? renderEdit() : renderDisplay()}
        <button onClick={switchMode} className={editMode ? "edit" : "display"}>
          {editMode ? "Switch to Display Mode" : "Switch to Edit Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
