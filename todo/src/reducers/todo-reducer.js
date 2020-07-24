export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now() * Math.random(),
  },
  {
    item: "Learn about react",
    completed: false,
    id: Date.now() * Math.random(),
  },
  {
    item: "Learn about redux",
    completed: false,
    id: Date.now() * Math.random(),
  },
];

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now * Math.random(),
        },
      ];
    default:
      return state;
  }
};
