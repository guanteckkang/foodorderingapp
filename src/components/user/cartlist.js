import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CartUseContext } from "../../content/cart-contex";
import DeleteIcon from "@mui/icons-material/Delete";

export function CartList() {
  const { cart, setCart, hidemodal, addItem, removeItem } = CartUseContext();
  const style = {
    overflow: "scroll",
  };
  function deleteAll() {
    if (cart.length != 0) {
      setCart([]);
      setTimeout(() => {
        hidemodal();
      }, 2000);
    } else return;
  }
  function erase(name) {
    const filter = cart.filter((e) => {
      return e.name != name;
    });
    setCart(filter);
  }
  const totalsum = cart?.map((x) => x.sum).reduce((x, y) => x + y, 0);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">Name.</TableCell>
            <TableCell align="center">Price (Rm)</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Sum (Rm)</TableCell>
            <TableCell align="right" onClick={deleteAll}>
              Clear All
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.length === 0 ? (
            <TableRow>
              <TableCell align="justify">Please add items</TableCell>
            </TableRow>
          ) : (
            cart.map((i, index) => {
              const { name, price, quantity, sum } = i;
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => {
                        removeItem({ name, price });
                      }}
                    >
                      -
                    </button>
                    <button disabled>{quantity}</button>
                    <button
                      onClick={() => {
                        addItem({ name, price });
                      }}
                    >
                      +
                    </button>
                  </TableCell>
                  <TableCell align="right">{sum.toFixed(2)}</TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      erase(name);
                    }}
                  >
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              );
            })
          )}

          <TableRow>
            <TableCell>Total (RM)</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              {cart.length == 0 ? "" : totalsum.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
