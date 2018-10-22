import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withRouter,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import {
  fetchProjects,
  deleteProject,
  toggleProject
} from "../reducers/project";
import Todo from "./Todo";

const Project = ({ id, title, isComplete, deleteProject, toggleProject }) => (
  <li key={id}>
    <span className="delete-project">
      <button onClick={() => deleteProject(id)}>X</button>
    </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleProject(id)}
    />
    <Link to={`/todo/${id}`}>{title}</Link>
  </li>
);

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <Router>
        <div className="project-list">
        {this.props.projects.length > 0 ? (
          <ul>
            {this.props.projects.map(project => (
              <Project
                key={project.id}
                toggleProject={this.props.toggleProject}
                deleteProject={this.props.deleteProject}
                {...project}
              />
            ))}
          </ul>
        ) : (
          <h4> Hey, add some projects </h4>
        )
      }
          <Route path="/todo/:project_id" component={Todo} />
        </div>
      </Router>
    );
  }
}

export default withRouter(
  connect(
    state => ({ projects: state.project.projects }),
    { fetchProjects, deleteProject, toggleProject }
  )(ProjectList)
);
