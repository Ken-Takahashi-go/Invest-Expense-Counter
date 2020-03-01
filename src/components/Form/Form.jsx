import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, addHour } from "./../../actions/itemActionCreator";
import "./Form.css";

const Form = props => {
  const [text, setText] = useState("");
  const [hour, setHour] = useState(0);

  const onClickButton = () => {
    if ((text, hour)) {
      props.addItem(text);
      setText("");
      props.addHour(hour);
      setHour(0);
    }
  };

  return (
    <div className="history">
      <div className="select-tag">
        <select name="InvestExpense">
          <option value="投資">投資</option>
          <option value="浪費">浪費</option>
        </select>
      </div>
      <div className="form">
        <input
          className="input-text"
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          placeholder="please input your activity"
        />
      </div>
      <div>
        <input
          className="input-hour"
          type="number"
          value={hour}
          onChange={e => {
            setHour(e.target.value);
          }}
          placeholder="please input hour"
        />
      </div>
      <div className="submit-button">
        <button onClick={onClickButton}>Add</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: text => {
      const action = addItem(text);
      dispatch(action);
    },
    addHour: hour => {
      const action = addHour(hour);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
