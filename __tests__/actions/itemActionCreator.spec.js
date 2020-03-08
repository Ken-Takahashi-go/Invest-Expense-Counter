import {
  ADD_ITEM,
  DELETE_ITEM,
  HOUR_AMOUNT
} from "./../../src/actions/itemActionCreator";
import {
  addItem,
  deleteItem,
  hourAmount
} from "./../../src/actions/itemActionCreator";

describe("itemActionCreator.jsのテスト", () => {
  it("addItemメソッド", () => {
    const dummyStatus = "浪費";
    const dummyText = "dummy";
    const dummmyHour = 3;

    const action = addItem(dummyStatus, dummyText, dummmyHour);
    console.log(action);

    expect(action).toStrictEqual({
      type: ADD_ITEM,
      status: dummyStatus,
      text: dummyText,
      hour: dummmyHour
    });
  });
  it("deleteItemメソッド", () => {
    const index = 1;
    const action = deleteItem(index);
    console.log(action);

    expect(action).toStrictEqual({
      type: DELETE_ITEM,
      id: index
    });
  });
  it("hourAmountメソッド", () => {
    const dummyHour = 1;

    const action = hourAmount(dummyHour);
    console.log(action);

    expect(action).toStrictEqual({
      type: HOUR_AMOUNT,
      hour: dummyHour
    });
  });
});
