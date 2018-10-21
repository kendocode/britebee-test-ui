import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import requireAuth from "./requireAuth";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Message from "./Message";
import Footer from "./Footer";

export class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <div className="itemApp">
          <Message />
          <ItemForm />
          {/*             <Route path="/:filter?" render={({match}) => (
              <ItemList />
            )} /> */}
          <ItemList />
        </div>
      </div>
    );
  }
}

export default withRouter(requireAuth(Todo));
