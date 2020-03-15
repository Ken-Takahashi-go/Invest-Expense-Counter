import {
  SHOW_ALL,
  SHOW_INVEST,
  SHOW_EXPENSE,
  SHOW_HEALING,
  SHOW_ALL_ERROR,
  SHOW_INVEST_ERROR,
  SHOW_EXPENSE_ERROR,
  SHOW_HEALING_ERROR
} from "../../src/actions/visibleFilterCreator.js";
import {
  showAll,
  showInvest,
  showExpense,
  showHealing
} from "../../src/actions/visibleFilterCreator.js";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import Item from "./../models/../../src/models/Item";

jest.mock("axios");
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("visibleFilterCreator.jsのテスト", () => {
  it("showAllメソッド", async () => {
    const expectedResults = [
      {
        status: "投資",
        hour: 2,
        text: "dummy"
      }
    ];
    axios.get.mockResolvedValue({
      collections: {
        expectedResults
      }
    });

    const store = mockStore();
    await store.dispatch(showAll());
    expect(store.getActions()).toEqual(
      [
        {
          type: SHOW_ALL
        }
      ],
      [
        {
          type: SHOW_ALL_ERROR
        }
      ]
    );
  });
  xit("showInvestメソッド", () => {
    expect(showInvest()).toStrictEqual({
      type: SHOW_INVEST
    });
  });
  xit("showExpenseメソッド", () => {
    expect(showExpense()).toStrictEqual({
      type: SHOW_EXPENSE
    });
  });
  xit("showInvestメソッド", () => {
    expect(showHealing()).toStrictEqual({
      type: SHOW_HEALING
    });
  });
});
