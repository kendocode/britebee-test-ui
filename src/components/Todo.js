import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requireAuth from './requireAuth';
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
            <Route path="/:filter?" render={({match}) => (
              <ItemList filter={match.params.filter}
              projectId={match.params.projectId} />
            )} />
            <Footer />
          </div>

      </div>
    );
  }
}



export default requireAuth(Todo);
