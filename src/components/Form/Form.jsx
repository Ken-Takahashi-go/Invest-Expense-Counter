import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./../../actions/itemActionCreator";
import "./Form.css";

const Form = props => {
  const [text, setText] = useState("");
  const [hour, setHour] = useState(0);
  const [status, setStatus] = useState("投資");

  const onClickButton = () => {
    if ((text, hour, status)) {
      props.addItem(text, hour, status);
      setText("");
      setHour(0);
      setStatus("投資");
    }
  };

  return (
    <div className="history">
      <div className="select-tag">
        <select
          name="InvestExpense"
          value={status}
          onChange={e => {
            setStatus(e.target.value);
          }}
        >
          <option>投資</option>
          <option>浪費</option>
        </select>
      </div>
      <div className="text-form">
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
      <div className="hour-form">
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
    addItem: (text, hour, status) => {
      const action = addItem(text, hour, status);
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
