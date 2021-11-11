
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MakeAdmin = () => {
    return (
        <Box>
            <TextField style={{width: '400px', margin: '10px 0'}} id="outlined-basic" label="Email" variant="outlined" /> <br/>
            <Button variant="contained">Make Admin</Button>
        </Box>
    );
};

export default MakeAdmin;