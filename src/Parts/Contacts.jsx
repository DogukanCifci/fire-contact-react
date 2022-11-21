//IMPORTS
import { TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

//EXPORT
const Contacts = ({ item }) => {
  return (
    <div>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          Isimler
        </TableCell>
        <TableCell align="right">{item}</TableCell>
        <TableCell align="right">{item}</TableCell>
        <TableCell align="right">
          <DeleteForeverIcon />
        </TableCell>
        <TableCell align="right">
          <AutoFixHighIcon />
        </TableCell>
      </TableRow>
    </div>
  );
};
export default Contacts;
