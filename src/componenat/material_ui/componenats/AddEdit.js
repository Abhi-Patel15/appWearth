import {
  Fade,
  Modal,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
  Button,
} from "@material-ui/core";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData, userData } from "../redux/slice/slice";

const AddEdit = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const userdata = useSelector((state) => state?.registerReducer?.Register);
  console.log("userdata", userdata);
  const { firstname, lastname, email, password } = user;
  const dispatch = useDispatch();

/******************* GET DATA *******************/
  useEffect(() => {
    if (!id) {
      setUser("");
    } else {
      userdata.find((element) => {
      if (element.id === id.id) {
      setUser(element);
       }
      });
    }
  }, []);

/************ ALL FUNCTION START HERE ************/
  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    simpleValidation();
    if (!id) {
      dispatch(userData(user));
      if(!user.firstname == "" && !user.firstname.trim() == '' &&!user.lastname.trim()== '' && !user.lastname=='' && !user.password.trim()==''&&!user.password== '' && !user.email.trim()==''&&!user.email== ''){
        setOpen(false);
        }
    } else {
      dispatch(editData(user));
      if(!user.firstname == "" && !user.firstname.trim() == '' &&!user.lastname.trim()== '' && !user.lastname=='' && !user.password.trim()==''&&!user.password== '' && !user.email.trim()==''&&!user.email== ''){
        setOpen(false);
        }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
/************* ALL FUNCTION END HERE ************/

/************* VALIDATION START HERE ************/
  const simpleValidation = () => {
    let errors = { ...error };
    if (!user.firstname.trim()) {
      errors.firstname = "firstname is required";
    } else {
      errors.firstname = "";
    }
    if (!user.lastname.trim()) {
      errors.lastname = "LastName is required";
    } else {
      errors.lastname = "";
    }
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else {
      errors.email = "";
    }
    if (!user.password.trim()) {
      error.password = "password is requird";
    } else {
      errors.password = "";
    }
    return setError(errors);
  };
/************* VALIDATION END HERE ************/ 

/*************** CSS START HERE **************/ 
  const styleModal = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const paperStayle = {
    padding: 20,
    height: "60vh",
    width: 350,
    margin: "20px auto",
  };

  const gridStayle = {
    marginTop: "5vh 0",
  };
/*************** CSS END HERE **************/ 

  return (
    <>
      <IconButton aria-label="delete" onClick={handleOpen}>
        {!id ? (
          <PersonAddAlt1RoundedIcon color="primary" />
        ) : (
          <ModeEditOutlineRoundedIcon color="primary" />
        )}
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        style={styleModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid style={gridStayle}>
            <Paper elevation={10} style={paperStayle}>
              <Box style={{ paddingTop: "40px" }}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  {" "}
                  {!id ? "Add user" : "Edit user"}
                </Typography>

                <TextField
                  label="First Name"
                  placeholder="firstname"
                  className="Text_Field"
                  name="firstname"
                  onChange={handelChange}
                  value={firstname}
                  type="text"
                  fullWidth
                  required
                />
                {error?.firstname && !user.firstname ? (
                  <p style={{ color: "red", margin:"0" }}>{error?.firstname}</p>
                ) : null}
                <TextField
                  label="Last Name"
                  placeholder="lastname"
                  className="Text_Field"
                  name="lastname"
                  onChange={handelChange}
                  value={lastname}
                  type="text"
                  fullWidth
                  required
                />
                {error?.lastname && !user.lastname ? (
                  <p style={{ color: "red", margin:"0" }}>{error?.lastname}</p>
                ) : null}
                <TextField
                  label="email"
                  placeholder="email"
                  className="Text_Field"
                  name="email"
                  onChange={handelChange}
                  value={email}
                  type="email"
                  fullWidth
                  required
                />
                {error?.email && !user.email ? (
                  <p style={{ color: "red", margin:"0" }}>{error?.email}</p>
                ) : null}
                <TextField
                  label="password"
                  placeholder="password"
                  className="Text_Field"
                  name="password"
                  onChange={handelChange}
                  value={password}
                  type="password"
                  fullWidth
                  required
                />
                {error?.password && !user.password ? (
                  <p style={{ color: "red", margin:"0" }}>{error?.password}</p>
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
                    {!id ? "add data" : "update data"}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
};

export default AddEdit;
