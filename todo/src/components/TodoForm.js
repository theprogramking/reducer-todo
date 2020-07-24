import React, { useState } from "react";

const TodoForm = ({ todoState, dispatch }) => {
  const [formState, updateFormState] = useState("");

  const handleInputChange = (event) => {
    updateFormState(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(event) => handleInputChange(event)} />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            payload: formState,
          });
        }}
      >
        Add Todo
      </button>
      {formState}
    </div>
  );
};

export default TodoForm;
