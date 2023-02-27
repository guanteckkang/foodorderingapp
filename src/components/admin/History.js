import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { ItemUseContext } from "../../content/item-contex";
import { useEffect, useState } from "react";

export default function History() {
  const { history, setHistory } = ItemUseContext();

  function deleteAll() {
    setHistory([]);
  }

  const totalsum = history
    .map((x) => x.sum)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);
  const totalquantity = history
    .map((x) => x.quantity)
    .reduce((x, y) => x + y, 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Sum (Rm)</TableCell>
            <TableCell align="right" onClick={deleteAll}>
              <DeleteIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.length === 0 ? (
            <TableRow>
              <TableCell align="justify">NO PURCHASE HISTORY</TableCell>
            </TableRow>
          ) : (
            history.map((i, index) => {
              const { date, quantity, sum } = i;
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell align="center">{quantity}</TableCell>
                  <TableCell align="right">{sum}</TableCell>
                </TableRow>
              );
            })
          )}
          <TableRow>
            <TableCell>Total </TableCell>
            <TableCell></TableCell>

            <TableCell align="center">
              {history.length == 0 ? "" : totalquantity}
            </TableCell>
            <TableCell align="right">
              {history.length == 0 ? "" : totalsum}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
