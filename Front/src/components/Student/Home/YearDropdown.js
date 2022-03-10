import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined" size="small">
        <InputLabel id="demo-simple-select-label" style={{lineHeight:'1em'}} >Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{height:30}}
        >
          <MenuItem>2016</MenuItem>
          <MenuItem>2017</MenuItem>
          <MenuItem>2018</MenuItem>
          <MenuItem>2019</MenuItem>
          <MenuItem>2020</MenuItem>
          <MenuItem>2021</MenuItem>
          <MenuItem>2022</MenuItem>
          <MenuItem>2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
