import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleItem, deleteItem } from "../reducers/project";

const Item = ({
  id,
  description,
  project_id,
  isComplete,
  toggleItem,
  deleteItem
}) => (
  <li key={id}>
    <span className="delete-item">
      <button onClick={() => deleteItem(id, project_id)}>X</button>
    </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleItem(id, project_id)}
    />
    {description}
  </li>
);


class ItemList extends Component {
  render() {
    return (
      <div className="Item-List">
        <ul>
          {this.location.state.itemArrary.map(item => (
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

export default  withRouter(
  connect(
    state => ({items: state.item.items}),
    { toggleItem, deleteItem }
  )(ItemList)
)



/*     (state, ownProps) => ({
      items: getVisibleItems(state.item.items, ownProps.filter)
    }),
 */