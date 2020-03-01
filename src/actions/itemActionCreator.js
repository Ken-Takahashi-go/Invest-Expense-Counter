export const ADD_ITEM = "ADD_ITEM";
export const ADD_HOUR = "ADD_HOUR";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = text => {
  return {
    type: ADD_ITEM,
    text
  };
};

export const addHour = hour => {
  return {
    type: ADD_HOUR,
    hour
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  };
};
