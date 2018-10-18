import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { fetchProjects, deleteProject } from "../reducers/project";

const Project = ({ id, title, deleteProject }) => (
  <li key={id}>
  <span className='delete-project'>
  <button onClick={() => deleteProject(id)}>X</button>
  </span>
    {title}
  </li>
);

// log works because with a stateless functional componenet
// console log will return undefined, so the or will move on
// to evaluate the implicit return within the parens
//const ProjectList = (props) => console.log('list rendering')  || (

// when moving from functional stateless to a class, use this.props not props

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div className="Project-List">
        <ul>
          {this.props.projects.map(project => (
              <Link to="/item" params={{project_id: project.id}}>
            <Project
              key={project.id}
              deleteProject={this.props.deleteProject}
              {...project}
            />  
              </Link>
            
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ projects: state.project.projects }), 
  { fetchProjects, deleteProject}
)(ProjectList);
