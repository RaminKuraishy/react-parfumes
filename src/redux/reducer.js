const initialState = {
  modal1: false,
  deleteModal: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        modal1: !state.modal1,
      };
    case "DEL":
      return {
        ...state,
        deleteModal: !state.deleteModal,
      };
    case "SET_LIST":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
