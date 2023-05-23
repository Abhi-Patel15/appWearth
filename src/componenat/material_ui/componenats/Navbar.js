import { AppBar, Box, Button, Grid, Tabs } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar>
      <Grid style={{ display: "inline-flex", justifyContent: "space-between" }}>
        <Box style={{ margin: "10px 40px" }}>😏 my Sweet app</Box>
        <Box>
          <Tabs style={{ width: "200px", padding: "2px 31px  " }}>
            <Button
              onClick={() => navigate("/login")}
              style={{ color: "#ffff", margin: "0 ,1px" }}
            >
              Login
            </Button>
            <Button onClick={() => navigate("/")} style={{ color: "#ffff" }}>
              Register
            </Button>
          </Tabs>
        </Box>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
