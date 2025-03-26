import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <TextField
      sx={{
        width: '80%',
        maxWidth: '750px',
        boxShadow: '5px 5px 5px gray',
        borderRadius: '15px',
        px: 2,
        py: 1,
        my: 5,
        mx: 'auto',
        '& .MuiOutlinedInput-root': {
          color: 'black',
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: 'black' }}>
            <FaSearch size={20} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;