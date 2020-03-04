import { Item } from "./../../src/models/Item";

describe("model/Item.jsのテスト", () => {
  it("this._statusの getterを持つ", () => {
    const status = "投資";
    const text = "dummy";

    const hour = 3;
    const item = new Item(status, text, hour);

    console.log(item);
    expect(item.status).toStrictEqual("投資");
    expect(item.text).toStrictEqual("dummy");

    expect(item.hour).toStrictEqual(3);
  });
});
