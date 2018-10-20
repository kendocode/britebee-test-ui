
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import item from '../reducers/item';
//import requireAuth from './requireAuth';



class ShowItems extends Component {

    componentDidMount() {

    }

  render() {
    return (
        <h1>gonna show me some items!
        {this.props.location.state.itemArray.map(
            item => <p>{item.id}</p>
        )}</h1>
     )
  }
}

export default withRouter(ShowItems)


  