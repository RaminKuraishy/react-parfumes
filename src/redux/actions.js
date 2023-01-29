export const open = () => ({ type: "OPEN" });
export const del = () => ({ type: "DEL" });
export const setList = data => ({ type: "SET_LIST", payload: data });

export const getList = () => async dispatch => {
  const data = await fetch("./data.json");
  dispatch(setList(await data.json()));
};
