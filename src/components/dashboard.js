import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchProtectedData, fetchProtectedDataSuccess, fetchProtectedDataError } from "../actions/protected-data";
import { ListGroup, ListGroupItem } from 'reactstrap';

export class Dashboard extends React.Component {
  /* componentDidMount() {
    this.props.dispatch(fetchProtectedDataSuccess())
  } */

//Protected data: {`${this.props.protectedData}`}
  render() {
    return (
    <div>
        <p>
            Email: {this.props.email}
        </p>
        <p>
            Name: {this.props.name}
        </p>
        { <ListGroup>
            <ListGroupItem>ID: {this.props.protectedData.data}</ListGroupItem>
            <ListGroupItem>Desc: {this.props.protectedData.data}</ListGroupItem>     
        </ListGroup> }

    </div>    
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    componentDidMount() {
      console.log(this.rootNode)
      dispatch(fetchProtectedData())
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    email: `${currentUser.email}`,
    name: `${currentUser.name}`,
    protectedData: `${state.data}`
  };
};

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
