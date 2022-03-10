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
  createData('1.', 'Science', '13-8-2021', '23-8-2021', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '),
  createData('2.', 'Mathematics', '13-8-2021', '23-8-2021', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '),
  createData('3.', 'English', '13-8-2021', '23-8-2021', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '),
  createData('4.', 'Hindi', '13-8-2021', '23-8-2021', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '),
];

export default function WeeklyTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', paddingLeft: '46px', borderBottom: 'none' }}>S no.</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Subject</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Assigned Date</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Submit Date</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Assignment Info</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Action</TableCell>
            <TableCell align="center" style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '20px', lineHeight: '30px', color: '#545454', borderBottom: 'none' }}>Status</TableCell>
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
                  <span style={{ background: '#214DF9', borderRadius: '5px', fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: '500', fontSize: '14px', lineHeight: '17px', color: '#FFFFFF', padding: '10px' }}>Download</span>
              </TableCell>
              <TableCell align="center" style={{ fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: '18px', lineHeight: '22px', color: '#000000', paddingTop: '24px', paddingBottom: '24px' }}>
                  <span style={{ background: '#C2FFB8', borderRadius: '5px', fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px', color: '#000000', padding: '10px' }}>Submitted</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
