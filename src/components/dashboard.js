import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchProtectedData } from "../actions/protected-data";
//import { ListGroup, ListGroupItem } from 'reactstrap';

export class Dashboard extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
    <div>
        <p>
            Email: {this.props.email}
        </p>
        <p>
            Name: {this.props.name}
        </p>
        <div>
          
        </div>
        <div>Protected Data: {this.props.protectedData}</div>
    </div>    
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    // email: state.auth.currentUser.email,
    email: `${currentUser.email}`,
    name: `${currentUser.name}`,
    protectedData: state.protectedData 
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
