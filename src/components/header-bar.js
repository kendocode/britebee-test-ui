import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { APP_NAME } from "../config";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if user is logged in
    let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <Button
                color="primary"
                onClick={() => this.logOut()}
                disabled={!this.props.loggedIn}
              >
              Log Out
              </Button>

            );
        }
    return (
        // make card for login form
      <div>
        <Navbar>
          <Nav>
            <NavItem>
              <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
            </NavItem>
            {logOutButton}
            <NavItem>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
