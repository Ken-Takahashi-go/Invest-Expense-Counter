import {
  addItem,
  deleteItem,
  hourAmount
} from "../../src/actions/itemActionCreator";
import { Item } from "../../src/models/Item";
import { itemReducer } from "./../../src/reducers/itemReducer.js";

describe("itemReducer.jsのテスト", () => {
  it("action.type === ADD_ITEMの時", () => {
    const dummyStatus = "投資";
    const dummyText = "dummy";
    const dummyHour = 1;
    const action = addItem(dummyStatus, dummyText, dummyHour);
    const initialState = [];
    const newState = itemReducer(initialState, action);
    console.log(newState);
    const item = new Item(dummyStatus, dummyText, dummyHour);
    console.log(item);
    // expect(newState).toStrictEqual([item]);
    expect(newState[0] instanceof Item).toBeTruthy();
    expect(newState[0].hour).toBe(1);
    expect(newState[0].status).toStrictEqual("投資");
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
    const item1 = new Item(
      `${prefixStatus}1`,
      `${prefixText}1`,
      `${prefixHour}`
    );
    const item2 = new Item(
      `${prefixStatus}2`,
      `${prefixText}2`,
      `${prefixHour}`
    );

    expect(state).toHaveLength(3);

    const targetIndex = 4;
    const deleteAction = deleteItem(targetIndex);
    console.log(deleteAction);
    state = itemReducer(state, deleteAction);
    console.log(state);
    expect(state).toHaveLength(2);
    expect(state[0] instanceof Item).toBe(true);
    expect(state[1].text).toBe("dummy2");
  });
  it("action.type === HOUR_AMOUNTの時", () => {
    const dummyStatus = "投資";
    const dummyText = "dummy";
    const dummyHour = 1;
    const action = hourAmount(dummyStatus, dummyText, dummyHour);
    const initialState = [];
    const newState = itemReducer(initialState, action);
    console.log(newState);
    const item = new Item(dummyStatus, dummyText, dummyHour);
    console.log(item);
    // expect(newState).toStrictEqual([item]);
    expect(newState[0] instanceof Item).toBeTruthy();
    expect(newState[0].hour).toBe(1);
    expect(newState[0].status).toStrictEqual("投資");
  });
});
