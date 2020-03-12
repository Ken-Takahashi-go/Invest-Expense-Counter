import {
  ADD_ITEM,
  DELETE_ITEM
} from "./../../src/actions/itemActionCreator.js";
import { addItem, deleteItem } from "./../../src/actions/itemActionCreator";

describe("itemActionCreator.jsのテスト", () => {
  it("addItemメソッド", async () => {
    const dummyStatus = "浪費";
    const dummyText = "dummy";
    const dummmyHour = 3;

    const action = await addItem(dummyStatus, dummyText, dummmyHour);
    console.log(action);

    expect(action).toStrictEqual({
      type: ADD_ITEM,
      status: dummyStatus,
      text: dummyText,
      hour: dummmyHour
    });
  });
  xit("deleteItemメソッド", () => {
    const index = 1;
    const action = deleteItem(index);
    console.log(action);

    expect(action).toStrictEqual({
      type: DELETE_ITEM,
      id: index
    });
  });
});
