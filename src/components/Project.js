import React, { Component } from "react";
import { withRouter, BrowserRouter as Router, Link } from "react-router-dom";
import requireAuth from "./requireAuth";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import Message from "./Message";

class Project extends Component {
  render() {
    return (
      <div className="Project">
          <div className="projectApp">
            <Message />
            <ProjectForm />
            <ProjectList />
          </div>
      </div>
    );
  }
}

export default withRouter(requireAuth(Project))
// auth: { authenticated: localStorage.getProject("token") }
