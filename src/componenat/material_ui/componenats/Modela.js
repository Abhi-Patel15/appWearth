import { 
    Button,
    Fade,
    Modal,
    Grid,
    Paper,
    TextField,
    Typography,
    Box,
    IconButton, } from '@material-ui/core';
import React, { useState } from 'react'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

const Modela = ({firstname,lastname,email,password}) => {

    const [open, setOpen] = useState(false);

/************ ALL FUNCTION START HERE ************/  
    const handleOpen = () => {
        setOpen(true);
    };

    const handelSubmit = () => {
        setOpen(false);
    };
/************* ALL FUNCTION END HERE **********/

/*************** CSS START HERE **************/ 
    const styleModal = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const paperStayle = {
        padding: 20,
        height: "50vh",
        width:350,
        margin: "20px auto",
      };
    
      const gridStayle = {
        marginTop:"5vh 0"
      }
/*************** CSS END HERE **************/      
  return (
    <>
      <IconButton   aria-label="delete"  onClick={handleOpen}>
              <RemoveRedEyeRoundedIcon color="success"/>
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
                                view
                            </Typography>

                            <TextField
                                label="First Name"
                                placeholder="firstname"
                                className="Text_Field"
                                name='firstname'
                                value={firstname}
                                type="text"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Last Name"
                                placeholder="lastname"
                                className="Text_Field"
                                name='lastname'
                                value={lastname}
                                type="text"
                                fullWidth
                                required
                            />
                            <TextField
                                label="email"
                                placeholder="email"
                                className="Text_Field"
                                name='email'
                                value={email}
                                type="email"
                                fullWidth
                                required
                            />
                            <TextField
                                label="password"
                                placeholder="password"
                                className="Text_Field"
                                name='password'
                                value={password}
                                type="text"
                                fullWidth
                                required
                            />
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
                            >close</Button>
                            </Box>
                            </Box>
                        </Paper>
                     </Grid>
                </Fade>
            </Modal>
            </>
  )
}

export default Modela