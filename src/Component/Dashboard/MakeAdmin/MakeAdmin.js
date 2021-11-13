import { useForm } from "react-hook-form";
import './makeAdmin.css'

//import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import axios from "axios";
//import useAuth from '../../../Hook/useAuth';

const MakeAdmin = () => {

    // const [email, setEmail] = useState('');
    const { register, handleSubmit, reset } = useForm();
    
    //const { token } = useAuth()

    const onSubmit = data => {
      axios.put(`http://localhost:5000/makeAdmin`, data)
      .then(res => {
          if (res.data.modifiedCount) {
              alert('Updated Successfully');
              reset();
          }
      })
  }

    return (
        <Box>
            <h2>Make Your Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="btn-primary rounded-3 border-0 p-2 mt-3"
                    type="submit"
                    value="Submit"
                />
            </form>
           
        </Box>
    );
};

export default MakeAdmin;