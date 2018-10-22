import React, {Component} from "react";
import { connect } from 'react-redux'
import { updateCurrentProject, saveProject } from "../reducers/project";


// needs this.props when destructured through connect
class ProjectForm extends Component {

  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrent(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveProject(this.props.currentProject)
  }

  render() {
    const {currentProject} = this.props
  
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" 
      onChange={this.handleInputChange}
      value={currentProject} />
    </form>
  );
}
  }  


export default connect(
  (state) => ({currentProject: state.project.currentProject}),
  {updateCurrentProject, saveProject}
)(ProjectForm)
