import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProjectItems } from "../reducers/project";

class ShowItems extends Component {
  componentDidMount() {
    this.props.dispatch(setProjectItems(this.props.match.params.project_id));
  }
  render() {
    return (
      <h1>
        Items will go here
        {this.props.items.map(item => (
          <p>{item.description}</p>
        ))}
      </h1>
    );
  }
}

export default withRouter(
  connect(state => ({ items: state.project.items })(ShowItems)));
