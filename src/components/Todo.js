import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requireAuth from './requireAuth';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Message from "./Message";
import Footer from "./Footer";

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <Router>
          <div className="itemApp">
            <Message />
            <ItemForm />
            <Route path="/:filter?" render={({match}) => (
              <ItemList filter={match.params.filter}/>
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}


export default requireAuth(Todo);
