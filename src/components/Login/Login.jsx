import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Login = props => {
  const [userMail, setMail] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <Box>
      <Container>
        <div>
          <form>
            <label>E-mail</label>
            <input value={userMail} onChange={e => setMail(e.target.value)} />
            <label>PassWord</label>
            <input
              value={passWord}
              onChange={e => setPassWord(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </Box>
  );
};
