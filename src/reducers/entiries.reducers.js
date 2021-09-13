const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    default:
      return state;
  }
};
export default reducer;

var initialEntries = [
  {
    id: 1,
    description: "Work Income redux",
    value: 10000,
    isExpense: false
  },
  {
    id: 2,
    description: "Work BIll redux",
    value: 20,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent redux",
    value: 2000,
    isExpense: true
  }
];
