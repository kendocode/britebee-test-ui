import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withRouter,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import { fetchProjects, deleteProject } from "../reducers/project";
import { fetchedItems } from "../reducers/item"
import ItemList from './ItemList'
import Todo from './Todo'
import requireAuth from "./requireAuth";
import Message from "./Message";

const Project = ({ id, title, deleteProject }) => (
  <li key={id}>
    <span className="delete-project">
      <button onClick={() => deleteProject(id)}>X</button>
    </span>
    {title}
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
          <ul>
            {this.props.projects.map(project => (
              <Link
                to={{
                  pathname: `/todo/${project.id}`,
                  state: { itemArray: project.items }
                }}
                onClick={() => this.props.fetchedItems(project.items)}
              >
                <Project
                  key={project.id}
                  deleteProject={this.props.deleteProject}
                  {...project}
                />
              </Link>
            ))}
          </ul>
          <Route
            path="/todo/:project_id"
            component={Todo}
            //render={passedProps => <Todo props={passedProps} />}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(
  connect(
    state => ({ projects: state.project.projects }),
    { fetchProjects, deleteProject, fetchedItems }
  )(ProjectList)
);
