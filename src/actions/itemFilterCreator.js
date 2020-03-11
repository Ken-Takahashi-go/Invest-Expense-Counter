export const SHOW_ALL = "SHOW_ALL";
export const SHOW_INVEST = "SHOW_INVEST";
export const SHOW_EXPENSE = "SHOW_EXPENSE";
export const SHOW_HEALING = "SHOW_HEALING";
export const SHOW_ALL_ERROR = "SHOW_ALL_ERROR";
export const SHOW_INVEST_ERROR = "SHOW_INVEST_ERROR";
export const SHOW_EXPENSE_ERROR = "SHOW_EXPENSE_ERROR";
export const SHOW_HEALING_ERROR = "SHOW_HEALING_ERROR";

export const showAll = () => {
  return {
    type: SHOW_ALL
  };
};
export const showInvest = () => {
  return {
    type: SHOW_INVEST
  };
};
export const showExpense = () => {
  return {
    type: SHOW_EXPENSE
  };
};
export const showHealing = () => {
  return {
    type: SHOW_HEALING
  };
};
