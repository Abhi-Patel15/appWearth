
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Register:[
        {
        id:"1",
        firstname:"abhi",
        lastname:"patel",
        email:"abhi@123gmail.com",
        password:"abhi@1234"
        },
        {
        id:"2",
        firstname:"vishal",
        lastname:"patel",
        email:"vishal@123gmail.com",
        password:"vishal@1234"
        }
    ],
    Login:[]
  };

export const createForm = createSlice({
    name:"Form",
    initialState,
    reducers:{  
        userData: (state, action) =>{
            state.Register = [...state.Register,{ 
                id:Date.now(),
                firstname:action?.payload?.firstname,
                lastname:action?.payload?.lastname,
                email:action?.payload?.email,
                password:action?.payload?.password
            }];
        },

        loginData:(state,action) =>{  
            state.Login = [...state.Login,action.payload];
        },

        deleteData:(state,action) => {
            state.Register = state.Register.filter((item) => item.id != action.payload)
        },
        
        editData:(state,action) => {
            const {id,firstname,lastname,email,password} = action.payload 
            const userValue = state.Register.find((item) => item.id === id)
            if(userValue){
                userValue.firstname = firstname;
                userValue.lastname  = lastname;
                userValue.email = email;
                userValue.password = password
            }
        },
    }
    
})

export const { userData, loginData, deleteData, editData } = createForm.actions;
export default createForm.reducer;