import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requireAuth from './requireAuth';
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import Message from "./Message";
import Footer from "./Footer";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <Router>
          <div className="projectApp">
            <Message />
            <ProjectForm />
            <Route path="/:filter?" render={({match}) => (
              <ProjectList filter={match.params.filter}/>
            )} />
          </div>
        </Router>
      </div>
    );
  }
}


export default requireAuth(Project);
// auth: { authenticated: localStorage.getProject("token") }