import React from "react";
import ListItems from "../List-items/List-items.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      currentListItem: {
        listText: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentListItem: {
        listText: e.target.value,
        key: Date.now(),
      },
    });
  };

  addListItem = (e) => {
    e.preventDefault();
    const newListItem = this.state.currentListItem;
    console.log(newListItem);
    if (newListItem.listText !== "") {
      const newListItems = [...this.state.lists, newListItem];
      this.setState({
        lists: newListItems,
        currentListItem: {
          listText: "",
          key: "",
        },
      });
    }
  };

  deleteList = (key) => {
    const filteredList = this.state.lists.filter((list) => list.key !== key);
    this.setState({
      lists: filteredList,
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <header>
          <form id="todo-form" onSubmit={this.addListItem}>
            <input
              type="text"
              placeholder="Enter Todo Item"
              value={this.state.currentListItem.listText}
              onChange={this.handleInput}
            />
            <button type="submit">Add List Item</button>
          </form>
        </header>
        <ListItems
          lists={this.state.lists}
          deleteList={this.deleteList}
        ></ListItems>
      </div>
    );
  }
}

export default App;
