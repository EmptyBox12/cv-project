/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from "uniqid";
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
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
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
  handlePersonalChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };
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
  switchMode = () => {
    this.setState({
      editMode: this.state.editMode ? false : true,
    });
  };
  renderEdit() {
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
        <EducationEdit />
      </div>
    );
  }
  renderDisplay() {
    return (
      <div>
        <PersonalDisplay personalInfo={this.state.personal} />
        <ExperienceDisplay experienceArray = {this.state.experience}/>
        <EducationDisplay />
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">CV Creator</h1>
        {this.state.editMode ? this.renderEdit() : this.renderDisplay()}
        <button onClick={this.switchMode}>Switch Mode</button>
      </div>
    );
  }
}

export default App;
