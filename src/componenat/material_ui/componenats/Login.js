import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../redux/slice/slice";


const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { email, password } = data;
  const users = useSelector((stata) => stata?.registerReducer?.Register);
  const navigate = useNavigate()
  
/************ ALL FUNCTION START HERE ************/
  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    simpleValidation();
    let items = users.find((item) => item.email === data.email && item.password === data.password)
    if (items) {
      dispatch(loginData(data));
      navigate('/home')
    }else{
      alert("increct email and password")
    }

  };
/************* ALL FUNCTION END HERE ************/

/************* VALIDATION START HERE ************/
  const simpleValidation = () => {
    let errors = { ...error };
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    if (!data.password.trim()) {
      error.password = "password is requird";
    } else {
      errors.password = "";
    }
    return setError(errors)
  };
/************* VALIDATION END HERE ************/ 

/*************** CSS START HERE **************/
  const paperStayle = {
    padding: 40,
    height: "45vh",
    width: 290,
    margin: "20px auto",
  };

  const gridStayle = {
    marginTop: "5vh 0",
  };
/*************** CSS END HERE **************/ 
  return (
    <Grid style={gridStayle}>
      <Paper elevation={10} style={paperStayle}>
        <Box style={{ paddingTop: "40px" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", paddingTop: "5vh" }}
          > 
            {" "}
            Login
          </Typography>
          <TextField
            label="email"
            type="email"
            name="email"
            onChange={handelChange}
            value={email}
            placeholder="email"
            fullWidth
            required
          />
           {error?.email && 
            !data.email ? 
            (
            <p style={{ color: "red" }}>
             {error?.email}</p>
            ) : null}
          <TextField
            label="password"
            type="password"
            name="password"
            onChange={handelChange}
            value={password}
            placeholder="password"
            fullWidth
            required
          />
          {error?.password && 
          !data.password ? 
          (
          <p style={{ color: "red" }}>
           {error?.password}</p>
          ) : null}
          <Box
            style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "18px",
            }}
          >
           <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handelSubmit}
            >
            Submit
           </Button>
           <Link
            to={"/"}
            style={{
            padding: "1vh 0",
            textDecoration: "none",
            textAlign: "center",
            }}
            >
              Go to Register
            </Link>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
