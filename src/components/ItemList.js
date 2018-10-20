/* import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleItem, deleteItem, getVisibleItems } from "../reducers/item";

const Item = ({ id, description, isComplete, toggleItem, deleteItem }) => (
  <li key={id}>
  <span className='delete-item'>
  <button onClick={() => deleteItem(id)}>X</button>
  </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleItem(id)}
    />
    {description}
  </li>
);

// log works because with a stateless functional componenet
// console log will return undefined, so the or will move on
// to evaluate the implicit return within the parens
//const ItemList = (props) => console.log('list rendering')  || (

// when moving from functional stateless to a class, use this.props not props

class ItemList extends Component {
  componentDidMount() {
 
    //this.props.fetchItems();
  }
  render() {
    return (
      <div className="Item-List">
        <ul>
          {items.map(item => (
            <Item
              key={item.id}
              toggleItem={this.props.toggleItem}
              deleteItem={this.props.deleteItem}
              {...item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({ items: getVisibleItems(state.item.items, ownProps.filter) }), 
  { fetchItems, toggleItem, deleteItem}
)(ItemList);
 */