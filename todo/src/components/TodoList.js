import React from "react";

const TodoList = ({ todoState, dispatch }) => {
  return (
    <div>
      {todoState.map((i) => {
        return (
          <div>
            {i.item}
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
