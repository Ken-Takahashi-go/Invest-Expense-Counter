import { addItem, deleteItem } from "../../src/actions/itemActionCreator";
import { Item } from "../../src/models/Item";
import { itemReducer } from "./../../src/reducers/itemReducer.js";

describe("itemReducer.jsのテスト", () => {
  it("action.type === ADD_ITEMの時", () => {
    const dummyStatus = "投資";
    const dummyText = "dummy";
    const dummyHour = 1;
    const action = addItem(dummyStatus, dummyText, dummyHour);
    console.log(action);
    const initialState = [];
    const newState = itemReducer(initialState, action);
    console.log(newState);
    const item = new Item(dummyStatus, dummyText, dummyHour);
    console.log(item);
    item._id = 1;
    console.log(item);
    expect(newState).toStrictEqual([item]);
  });
  it("action.type === DELETE_ITEMの時", () => {
    const prefixStatus = "投資";
    const prefixText = "dummy";
    const prefixHour = "1";
    let state = [];
    for (let i = 0; i < 3; i++) {
      const status = prefixStatus + i;
      const text = prefixText + i;
      const hour = prefixHour;
      const action = addItem(status, text, hour);
      state = itemReducer(state, action);
    }
    const item0 = new Item(
      `${prefixStatus}0`,
      `${prefixText}0`,
      `${prefixHour}`
    );
    item0._id = 3;
    const item1 = new Item(
      `${prefixStatus}1`,
      `${prefixText}1`,
      `${prefixHour}`
    );
    item1._id = 4;
    const item2 = new Item(
      `${prefixStatus}2`,
      `${prefixText}2`,
      `${prefixHour}`
    );
    item2._id = 5;

    expect(state).toStrictEqual([item0, item1, item2]);

    const targetIndex = 4;
    const deleteAction = deleteItem(targetIndex);
    console.log(deleteAction);
    state = itemReducer(state, deleteAction);
    console.log(state);
    expect(state).toStrictEqual([item0, item2]);
  });
});
