import React, { Component } from 'react';
import {withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'reactstrap'
//import './HeaderStyle.css';

class Header extends Component {
  
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div >
          <Redirect to="/project"></Redirect>
          <Link to="/signout">Sign Out</Link>
          <Link to="/project">Refresh Projects</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
      <Navbar color="primary" expand="md">
      <Link to="/project">Brightbee Todos</Link>
        {this.renderLinks()}
      </Navbar>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default withRouter(connect(mapStateToProps)(Header));
