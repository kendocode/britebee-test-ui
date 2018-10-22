import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
//import Message from "./Message";
//import Footer from "./Footer";


// presentation container
export class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <div className="itemApp">

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

export default withRouter(Todo);
