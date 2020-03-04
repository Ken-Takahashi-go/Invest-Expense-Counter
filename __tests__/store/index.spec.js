import { store } from "../../src/store/index";
import { itemReducer } from "../../src/reducers/itemReducer";

describe("store/index.jsのテスト", () => {
  it("itemReducerを使ったstateを持つ", () => {
    //store初期設定をテスト
    expect(store.getState()).toStrictEqual({
      items: []
    });
  });
});
