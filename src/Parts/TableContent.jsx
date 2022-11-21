import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Contacts from "./Contacts";

function TableContent() {
  const data = [
    {
      id: 1,
      name: "Hüseyin",
      number: "1",
      gender: "Male",
    },
    {
      id: 2,
      name: "Hasan",
      number: "2",
      gender: "Male",
    },
    {
      id: 3,
      name: "Ali",
      number: "3",
      gender: "Male",
    },
    {
      id: 4,
      name: "Dogukan",
      number: "0123456",
      gender: "Male",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[].map((item, index) => (
            <Contacts key={index} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableContent;
