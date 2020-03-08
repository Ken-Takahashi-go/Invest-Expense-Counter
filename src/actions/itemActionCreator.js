export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const HOUR_AMOUNT = "HOUR_AMOUNT";

export const addItem = (status, text, hour) => {
  return {
    type: ADD_ITEM,
    status,
    text,
    hour
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id
  };
};

export const hourAmount = hour => {
  return {
    type: HOUR_AMOUNT,
    hour
  };
};
