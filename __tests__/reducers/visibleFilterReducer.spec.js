import {
  SHOW_ALL,
  SHOW_INVEST,
  SHOW_EXPENSE,
  SHOW_HEALING
} from "../actions/visibleFilterCreator.js";
import { Item } from "../models/Item";
import { addItem, deleteItem } from "../../src/actions/itemActionCreator";
import { Item } from "../../src/models/Item";
import { itemReducer } from "./../../src/reducers/itemReducer.js";

describe("visibleFilterReducer.jsのテスト", () => {
  it("action.type === SHOW_ALLの時", () => {
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
    // expect(newState).toStrictEqual([item]);
    expect(newState[0] instanceof Item).toBeTruthy();
    expect(newState[0].hour).toBe(1);
    expect(newState[0].status).toStrictEqual("投資");
  });
});
