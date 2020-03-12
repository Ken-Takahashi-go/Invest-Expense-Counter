import {
  SHOW_ALL,
  SHOW_INVEST,
  SHOW_EXPENSE,
  SHOW_HEALING
} from "../../src/actions/visibleFilterCreator.js";
import {
  showAll,
  showInvest,
  showExpense,
  showHealing
} from "../../src/actions/visibleFilterCreator.js";

describe("visibleFilterCreator.jsのテスト", () => {
  it("showAllメソッド", () => {
    expect(showAll()).toStrictEqual({
      type: SHOW_ALL
    });
  });
  it("showInvestメソッド", () => {
    expect(showInvest()).toStrictEqual({
      type: SHOW_INVEST
    });
  });
  it("showExpenseメソッド", () => {
    expect(showExpense()).toStrictEqual({
      type: SHOW_EXPENSE
    });
  });
  it("showInvestメソッド", () => {
    expect(showHealing()).toStrictEqual({
      type: SHOW_HEALING
    });
  });
});
