import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { fetchProjects, deleteProject } from "../reducers/project";
import { toggleItem, deleteItem, getVisibleItems } from "../reducers/item";
import requireAuth from "./requireAuth";
import ItemForm from "./ItemForm";
import Message from "./Message";
import Footer from "./Footer";
import ShowItems from "./ShowItems"

const Project = ({ id, title, deleteProject }) => (
  <li key={id}>
    <span className="delete-project">
      <button onClick={() => deleteProject(id)}>X</button>
    </span>
    {title}
  </li>
);

const Item = ({ id, description, isComplete, toggleItem, deleteItem }) => (
  <li key={id}>
  <span className='delete-item'>
  <button onClick={() => deleteItem(id)}>X</button>
  </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleItem(id)}
    />
    {description}
  </li>
);

const ItemList = ({ items }) => (
  <div className="Item-List">
  <ul>
    {items.map(item => (
      <Item
        key={item.id}
        toggleItem={this.props.toggleItem}
        deleteItem={this.props.deleteItem}
        {...item}
      />
    ))}
  </ul>
</div>
)

const Todo = ({items}) => (
  <div className="Todo">
    <Message />
    <ItemForm />
    <ItemList items={items} />
    <Footer />
  </div>
)


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
              <Link replace to={{
                pathname: `project/todo/${project.id}`,
                state: { itemArray: project.items }
              }}>
                <Project
                  key={project.id}
                  deleteProject={this.props.deleteProject}
                  {...project}
                />
              </Link>
          ))}
        </ul>
          <Route path="/project/todo/:projectId" render={(passedProps) => <ShowItems props={passedProps}  /> }/>
      </div>
      </Router>
      
    );
  }
}

export default withRouter(connect(
  state => ({ projects: state.project.projects }),
  { fetchProjects, deleteProject, toggleItem, deleteItem }
)(ProjectList))
