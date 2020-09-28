import React from "react";
import "./List-items.styles.css";
import { ReactComponent as DeleteIcon } from "../../Assets/delete.svg";
import { ReactComponent as EditIcon } from "../../Assets/edit-button.svg";
import FlipMove from "react-flip-move";

const ListItems = (props) => {
  const lists = props.lists;
  const listItems = lists.map((list) => {
    return (
      <div className="list" key={list.key}>
        <p>{list.listText}</p>
        <div className="edit-delete">
          <span>
            <EditIcon />
          </span>
          <span>
            <DeleteIcon onClick={() => props.deleteList(list.key)} />
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
