import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, location, exhibitor, startDate, endDate, price) {
  return {
    name,
    location,
    exhibitor,
    startDate,
    endDate,
    workDay: [
      {
        date: '2024-07-25',
        membersNeeded: 7,
        membersAssigned: 3,
      },
      {
        date: '2024-07-25',
        membersNeeded: 4,
        membersAssigned: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.exhibitor}</TableCell>
        <TableCell align="right">{row.startDate}</TableCell>
        <TableCell align="right">{row.endDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Work Day
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Members Assigned</TableCell>
                    <TableCell>Members Needed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.workDay.map((workDayRow) => (
                    <TableRow key={workDayRow.date}>
                      <TableCell component="th" scope="row">
                        {workDayRow.date}
                      </TableCell>
                      <TableCell>{workDayRow.membersAssigned}</TableCell>
                      <TableCell>{workDayRow.membersNeeded}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    location: PropTypes.string.isRequired,
    exhibitor: PropTypes.string.isRequired,
    workDay: PropTypes.arrayOf(
      PropTypes.shape({
        membersNeeded: PropTypes.number.isRequired,
        membersAssigned: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Job 1', 'SDC', 'Wang', '7/25/2024', '7/30/2024'),
  createData('Job 2', 'SDC', 'Apple', '7/25/2024', '7/30/2024'),
  createData('Job 3', 'LAC', 'MSFT', '7/25/2024', '7/30/2024'),
  createData('Job 4', 'LAS', 'Ford', '7/25/2024', '7/30/2024'),
  createData('Job 5', 'CHI', 'DePaul', '7/25/2024', '7/30/2024'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Job Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Exhibitor</TableCell>
            <TableCell align="right">Start&nbsp;Date</TableCell>
            <TableCell align="right">End&nbsp;Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
