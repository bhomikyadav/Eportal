import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DueDate() {
  const [date, setDate] = React.useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Due Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Date 1</MenuItem>
          <MenuItem value={20}>Date 2</MenuItem>
          <MenuItem value={30}>Date 3</MenuItem>
          <MenuItem value={30}>Date 4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
