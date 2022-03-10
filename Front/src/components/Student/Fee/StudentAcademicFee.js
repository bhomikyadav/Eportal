import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Academic Q1', '₹  '+3000, '25-8-2021', '₹  '+3000, '25-8-2021'),
  createData('Academic Q2', '₹  '+3000, '25-8-2021', '₹  '+3000, '25-8-2021'),
  createData('Academic Q3', '₹  '+3000, '25-8-2021', '₹  '+3000, '25-8-2021'),
  createData('Academic Q4', '₹  '+3000, '25-8-2021', '₹  '+3000, '25-8-2021'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', paddingLeft: '46px', borderBottom: 'none' }}>Fees Type</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Amount</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Due Date</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Late Payment</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Date Submitted</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingLeft: '46px', paddingTop: '24px', paddingBottom: '24px' }}>
                {row.name}
              </TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingTop: '24px', paddingBottom: '24px' }}>{row.calories}</TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingTop: '24px', paddingBottom: '24px' }}>{row.fat}</TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#FF2934', paddingTop: '24px', paddingBottom: '24px' }}>{row.carbs}</TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingTop: '24px', paddingBottom: '24px' }}>{row.protein}</TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingTop: '24px', paddingBottom: '24px' }}>
                  <span style={{ border: '1.5px solid #3CB532', borderRadius: '5px', background: '#FFFFFF', fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '21px', color: '#3CB532', padding: '10px' }}>View Fess Structure</span>
                  &nbsp;
                  &nbsp;
                  <span style={{ background: '#3CB532', borderRadius: '5px', fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '21px', color: '#FFFFFF', padding: '10px' }}>Pay Now</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
