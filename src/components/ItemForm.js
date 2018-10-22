import React, {Component} from "react";
import { connect } from 'react-redux'
import { updateCurrentItem, saveItem } from "../reducers/project";


// needs this.props when destructured through connect
class ItemForm extends Component {

  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrentItem(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveItem(this.props.currentItem)
  }

  render() {
    const {currentItem} = this.props
  
  return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" 
      onChange={this.handleInputChange}
      value={currentItem} />
    </form>
  );
}
  }


export default connect(
  (state) => ({currentItem: state.project.currentItem}),
  {updateCurrentItem, saveItem}
)(ItemForm)
