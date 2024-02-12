import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Input as BaseInput } from "@mui/base/Input";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendOtp } from "../services/UserService";

const Login = () => {
  // const [userMobileNumber, setUserMobileNumber] = useState({
  //   userMobileNumber: "",
  // });

  const [userMob, setUserMob] = useState("");

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    // let actualValue = event.target.value;
    // setLoginDetail({ ...loginDetail, [field]: actualValue });

    setUserMob(event.target.value);
  };
  const sendOtp1 = (event) => {
    event.preventDefault();

    console.log(userMob);

    if (userMob.trim() == "") {
      toast.error("Mobile Number is required !!!");
      return;
    }
    // Submit the data to server to generate token
    sendOtp(userMob)
      .then((resp) => {
        console.log("Send otp");
        console.log(resp);
        window.location = "/otp";
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong on server !!!");
      });

    // console.log(data);
  };

  const resetData = () => {
    setUserMob(""); // Reset userMob to clear the input field
  };
  return (
    <Base>
      <Container>
        {JSON.stringify(userMob)}
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h3>Login Here !!!</h3>
              </CardHeader>
              <CardBody>
                <form action="">
                  <FormGroup>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { my: 1, width: "100%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        onChange={(e) => handleChange(e, "userMob")}
                        value={userMob}
                        id="outlined-basic fullWidth"
                        type="number"
                        label="Mobile Number"
                        variant="outlined"
                      />

                      <Container className="text-center">
                        <Button
                          variant="contained"
                          color="primary"
                          outline
                          onClick={sendOtp1}
                        >
                          Send OTP
                        </Button>
                        <Button
                          outline
                          variant="contained"
                          color="secondary"
                          className="ms-2"
                          type="reset"
                          onClick={resetData}
                        >
                          Reset
                        </Button>
                      </Container>
                    </Box>
                  </FormGroup>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
