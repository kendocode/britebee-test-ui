import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProjectItems } from "../reducers/project";

class ShowItems extends Component {
  render() {
    const items = this.props.dispatch(
        setProjectItems(this.props.match.params.project_id)
      );
    return (
      <h1>
        Items will go here
        {items.map( item => <h2>{item.description}</h2>)}
      </h1>
    );
  }
}

/* const mapStateToProps = (state, ownProps) => (
setProjectItems(state, ownProps.match.params.project_id)) */

/* const mapDispatchToProps = (state, ownProps) => (
    setProjectItems(state, ownProps.match.params.project_id) 
    ) */

export default withRouter(connect()(ShowItems));
