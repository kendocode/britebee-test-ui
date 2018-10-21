
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import requireAuth from './requireAuth';



class ShowItems extends Component {

  render() {
      const items = this.props.location.state.itemArray
    return (
        <h1>gonna show me some items!
        {items.map(
            item => <p>{item.id}</p>
        )}</h1>
     )
  }
}

export default withRouter(requireAuth(ShowItems))
