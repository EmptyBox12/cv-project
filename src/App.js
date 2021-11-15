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
  render() {
    function renderEdit() {
      return (
        <div>
        <PersonalEdit />
        <ExperienceEdit />
        <EducationEdit />
        </div>
      );
    }
    function renderDisplay() {
      return (
        <div>
        <PersonalDisplay />
        <ExperienceDisplay />
        <EducationDisplay />
        </div>
      );
    }
    return (
      <div className="App">
        {this.state.editMode ? renderEdit() : renderDisplay()}
      </div>
    );
  }
}

export default App;
