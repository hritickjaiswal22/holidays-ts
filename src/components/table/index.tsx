import React from "react";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { STable } from "./style";

type PropType = {
  headings: Array<string>;
  rows: {
    desc: string;
    holiday: string;
    date: string;
  }[];
};

function TableComponent(props: PropType) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <STable {...props}>
      <TableHead>
        <TableRow>
          {props.headings.map((heading) => (
            <StyledTableCell>{heading}</StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row) => (
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {row.desc}
            </StyledTableCell>
            <StyledTableCell align="left">{row.holiday}</StyledTableCell>
            <StyledTableCell align="left">{row.date}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </STable>
  );
}

export default TableComponent;
