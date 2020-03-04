import store from "../../src/store/index";
import { ADD_ITEM } from "../../src/reducers/itemReducer";
import { itemReducer } from "../../src/reducers/itemReducer";

describe("store/index.jsのテスト", () => {
  it("itemReducerを使ったstateを持つ", () => {
    //store初期設定をテスト
    console.log(store);
    expect(store.getState()).toStrictEqual([]);
  });
});
