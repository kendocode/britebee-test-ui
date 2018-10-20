import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { fetchProjects, deleteProject } from "../reducers/project";
import {Todo} from './Todo'
import requireAuth from "./requireAuth";

const Project = ({ id, title, deleteProject }) => (
  <li key={id}>
    <span className="delete-project">
      <button onClick={() => deleteProject(id)}>X</button>
    </span>
    {title}
  </li>
);

// log works with a stateless functional componenet because
// console log will return undefined, so the or will move on
// to evaluate the implicit return within the parens
//const ProjectList = (props) => console.log('list rendering')  || (

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
          <div className="project-list">
            <ul>
            {this.props.projects.map(project => (
              <Link to={`/todo/${project.id}`}>
                <Project
                  key={project.id}
                  deleteProject={this.props.deleteProject}
                  {...project}
                />
              </Link>
            ))}
          </ul>
        <Route path="/todo/:projectId" component={Todo} />
          </div>
    );
  }
}

export default (connect(
  state => ({ projects: state.project.projects }),
  { fetchProjects, deleteProject }
))(ProjectList);
