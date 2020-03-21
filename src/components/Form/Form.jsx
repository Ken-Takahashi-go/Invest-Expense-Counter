import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemActionCreator";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import "./Form.css";
import { Redirect } from "react-router-dom";

const Form = props => {
  const [text, setText] = useState("");
  const [hour, setHour] = useState(0);
  const [status, setStatus] = useState("投資");

  const onClickButton = () => {
    if ((text, hour, status)) {
      props.addItem(status, text, hour);

      setText("");
      setHour(0);
      setStatus("投資");
    }
  };

  return (
    <Box color="text.primary">
      <Container>
        <h3>今日の積み上げ</h3>
        <div className="text-field">
          <Input
            variant="outlined"
            className="input-text"
            type="text"
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="please input your activity"
          />
          <select
            name="chooseStatus"
            className="radio-select"
            value={status}
            onChange={e => {
              setStatus(e.target.value);
            }}
          >
            <option value="投資">投資</option>
            <option value="浪費">浪費</option>
            <option value="癒し">癒し</option>
          </select>

          <input
            variant="outlined"
            label="Hour"
            className="input-hour"
            type="number"
            value={hour}
            onChange={e => {
              setHour(e.target.value);
            }}
            placeholder="please input hour"
          />
          <p className="hour">Hour</p>

          <Button
            variant="contained"
            color="primary"
            onClick={onClickButton}
            className="button"
          >
            Go
          </Button>
        </div>
      </Container>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (status, text, hour) => {
      const action = addItem(status, text, hour);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
