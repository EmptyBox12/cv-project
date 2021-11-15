/* eslint-disable no-useless-constructor */
import React from "react";
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
        },
      ],
      experience: [
        {
          companyName: "",
          position: "",
          description: "",
          startDate: "",
          endDate: "",
        },
      ],
      editMode: true,
    };
  }
  handlePersonalChange = (e) =>{
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name] : e.target.value,
      }
    });
  };
  switchMode = () =>{
    this.setState({
      ...this.state,
      editMode : this.state.editMode ? false : true,
    })
  }
  renderEdit() {
    return (
      <div>
        <PersonalEdit personalInfo={this.state.personal} handlePersonalChange = {this.handlePersonalChange}/>
        <ExperienceEdit />
        <EducationEdit />
      </div>
    );
  }
  renderDisplay() {
    return (
      <div>
        <PersonalDisplay personalInfo={this.state.personal} />
        <ExperienceDisplay />
        <EducationDisplay />
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">CV Creator</h1>
        {this.state.editMode ? this.renderEdit() : this.renderDisplay()}
        <button onClick = {this.switchMode}>Switch Mode</button>
      </div>
    );
  }
}

export default App;
