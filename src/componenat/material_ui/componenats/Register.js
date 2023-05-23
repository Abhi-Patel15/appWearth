import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../redux/slice/slice";

export const Register = () => {
  const[users, setUsers] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  })
  const [error, setError] = useState({
    firstname:'',
    lastname:'',      
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const {firstname,lastname, email,password} = users;
  const navigate = useNavigate()

/************ ALL FUNCTION START HERE ************/
  const handelChange= (e) =>{
    setUsers({...users,[e.target.name]:e.target.value})
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    simpleValidation()
    if(!users.firstname == "" && !users.firstname.trim() == '' &&!users.lastname.trim()== '' && !users.lastname=='' && !users.password.trim()==''&&!users.password== '' && !users.email.trim()==''&&!users.email== ''){
      const id = Date.now()
      dispatch(userData(users))
      navigate('/login')
    }
  }
/************* ALL FUNCTION END HERE ************/

/************* VALIDATION START HERE ************/
   const simpleValidation = () => {
    let errors = { ...error };
    if (!users.firstname.trim()) {
      errors.firstname = "firstname is required";
    } else {
      errors.firstname = "";
    }
      if (!users.lastname.trim()) {
      errors.lastname = "LastName is required";
    } else {
      errors.lastname = "";
    }
    if (!users.email.trim()) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    if (!users.password.trim()) {
      error.password = "password is requird";
    } else {
      errors.password = "";
    }
    return setError(errors)
  };
/************* VALIDATION END HERE ************/

/*************** CSS START HERE **************/  
  const paperStayle = {
    padding: 20,
    height: "60vh",
    width:290,
    margin: "20px auto",
  };

  const gridStayle = {
    marginTop:"5vh 0"
  }
/*************** CSS END HERE **************/
  return (
    <Grid style={gridStayle}>
      <Paper elevation={10} style={paperStayle}>
        <Box style={{ paddingTop: "40px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {" "}
            Register
          </Typography>
          <TextField
            label="Frist Name"
            placeholder="firstname"
            className="Text_Field"
            name='firstname'
            value={firstname}
            onChange={handelChange}
            type="text"
            fullWidth
            required
          />
           {error?.firstname && 
          !users.firstname ? 
          (
          <p style={{ color: "red" }}>
           {error?.firstname}</p>
          ) : null}
          <TextField
            label="Last Name"
            placeholder="lastname"
            className="Text_Field"
            name='lastname'
            value={lastname}
            onChange={handelChange}
            type="text"
            fullWidth
            required
          />
           {error?.lastname && 
          !users.lastname ? 
          (
          <p style={{ color: "red" }}>
           {error?.lastname}</p>
          ) : null}
          <TextField
            label="email"
            placeholder="email"
            className="Text_Field"
            name='email'
            value={email}
            onChange={handelChange}
            type="email"
            fullWidth
            required
          />
             {error?.email && 
            !users.email ? 
            (
            <p style={{ color: "red" }}>
             {error?.email}</p>
            ) : null}
          <TextField
            label="password"
            placeholder="password"
            className="Text_Field"
            name='password'
            value={password}
            onChange={handelChange}
            type="password"
            fullWidth
            required
          />
           {error?.password && 
          !users.password ? 
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
            <Button variant="contained" color="primary" type="button" onClick={handelSubmit}>
              Submit
            </Button>
            <Link
              to={"/Login"}
              style={{ padding: "1vh 0", textDecoration: "none",  textAlign:"center"}}
            >
              Go to Login
            </Link>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
