import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProjectItems } from "../reducers/project";

class ShowItems extends Component {

    componentDidMount() {
//        console.log(this.props)
this.props.dispatch(setProjectItems(this.props.match.params.project_id))
    }

        render() {
        return (
      <h1>
          Items will go here
          {/*getProjectItems(this.props.match.params.project_id)*/}
      </h1>
    );
  }
}


/* const mapStateToProps = (state, ownProps) => (
setProjectItems(state, ownProps.match.params.project_id)) */

/* const mapDispatchToProps = (state, ownProps) => (
    setProjectItems(state, ownProps.match.params.project_id) 
    ) */

export default withRouter(connect()(ShowItems))
