import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleItem, deleteItem, setProjectItems} from "../reducers/project";

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
  componentDidMount() {
    this.props.setProjectItems(this.props.match.params.project_id);
  }
  render() {
    return (
      <div className="Item-List">
        <ul>
          {this.props.items.map(item => (
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
  connect(state => ({ items: state.project.items }),
  {toggleItem, deleteItem, setProjectItems})(ItemList)
)
