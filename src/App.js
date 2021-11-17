/* eslint-disable no-useless-constructor */
import React from "react";
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      education: [
        {
          schoolName: "",
          major: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      ],
      experience: [
        {
          companyName: "",
          position: "",
          description: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      ],
      editMode: true,
    };
  }
  //personal section
  handlePersonalChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };
  //experience section
  handleExperienceChange = (e) => {
    let index = e.target.getAttribute("data-id");
    let experience = [...this.state.experience];
    experience[index] = {
      ...this.state.experience[index],
      [e.target.name]: e.target.value,
    };
    this.setState({ experience });
  };
  clickAddExperience = (e) => {
    let object = {
      companyName: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    this.setState({
      experience: this.state.experience.concat(object),
    });
  };
  clickDeleteExperience = (e) => {
    let deleteIndex = e.target.getAttribute("data-id");
    let experience = this.state.experience.filter((item, index) => {
      if (index !== parseInt(deleteIndex)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ experience });
  };
  //education section
  handleEducationChange = (e) => {
    let index = e.target.getAttribute("data-id");
    let education = [...this.state.education];
    education[index] = {
      ...this.state.education[index],
      [e.target.name]: e.target.value,
    };
    this.setState({ education });
  };
  clickAddEducation = (e) => {
    let object = {
      schoolName: "",
      major: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    this.setState({
      education: this.state.education.concat(object),
    });
  };
  clickDeleteEducation = (e) => {
    let deleteIndex = e.target.getAttribute("data-id");
    let education = this.state.education.filter((item, index) => {
      if (index !== parseInt(deleteIndex)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ education });
  };
  //switch from preview to edit or vice versa
  switchMode = () => {
    this.setState({
      editMode: this.state.editMode ? false : true,
    });
  };
  //render edit and display modes
  renderEdit = () => {
    return (
      <div>
        <PersonalEdit
          personalInfo={this.state.personal}
          handlePersonalChange={this.handlePersonalChange}
        />
        <ExperienceEdit
          experienceArray={this.state.experience}
          handleExperienceChange={this.handleExperienceChange}
          clickAddExperience={this.clickAddExperience}
          clickDeleteExperience={this.clickDeleteExperience}
        />
        <EducationEdit
          educationArray={this.state.education}
          handleEducationChange={this.handleEducationChange}
          clickAddEducation={this.clickAddEducation}
          clickDeleteEducation={this.clickDeleteEducation}
        />
      </div>
    );
  };
  renderDisplay = () => {
    return (
      <div>
        <PersonalDisplay personalInfo={this.state.personal} />
        <ExperienceDisplay experienceArray={this.state.experience} />
        <EducationDisplay educationArray={this.state.education} />
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">CV Creator</h1>
        </div>
        <div className="content">
          {this.state.editMode ? this.renderEdit() : this.renderDisplay()}
          <button
            onClick={this.switchMode}
            className={this.state.editMode ? "edit" : "display"}
          >
            {this.state.editMode ? "Switch to Display Mode" : "Switch to Edit Mode"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
