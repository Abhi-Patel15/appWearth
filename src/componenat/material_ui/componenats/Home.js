import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData } from '../redux/slice/slice';
import Modela from './Modela';
import AddEdit from './AddEdit';
const Home = () => {

  const items = useSelector((state)=>state?.registerReducer?.Register)
  const dispatch = useDispatch();

/*************** CSS START HERE **************/
  const paperStyle = {
      height:"auto",
      width:"130vh",
      margin: "79px auto",
  }
/*************** CSS END HERE **************/    
  return (
    
    <Grid>
      <Navbar />  
        <Paper elevation={5} style={paperStyle}>
{/*************** MODEL ***************/}
        <AddEdit />
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Frist Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">password</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row,index) => (
            <TableRow
              key={index+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{index+1}</TableCell>
              <TableCell  align="center" component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center" >{row.password}</TableCell>
              <TableCell align="center">
              <IconButton  onClick={() =>dispatch(deleteData(row.id)) } aria-label="delete"> 
              <DeleteIcon color="error"/>
              </IconButton>
{/*************** MODEL ***************/}
              <Modela firstname={ row.firstname} lastname={row.lastname} email={row.email} password={row?.password} />
{/*************** MODEL ***************/}              
              <AddEdit  id={row}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
    </Grid>
  )
}

export default Home