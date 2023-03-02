import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { CartUseContext } from "../../content/cart-contex";
import { ItemUseContext } from "../../content/item-contex";
import { useEffect, useState } from "react";

export function CheckOut() {
  const { item, cart, setCart, hidemodal, addItem, removeItem, menu, setMenu } =
    CartUseContext();
  const { history, setHistory } = ItemUseContext();
  const [none, setNone] = useState("none");

  const closebox = () => {
    setTimeout(() => {
      hidemodal();
    }, 2000);
  };

  function deleteAll() {
    // if (cart.length === 0) {
    //   return;
    // } else {
    //   for (let i = 0; i <= cart.length; i++) {
    //     menu.map((e) => {
    //       if (e.name === cart[i]?.name) {
    //         return {
    //           ...e,
    //           quantity: e.quantity + cart[i].quantity,
    //         };
    //       } else return e;
    //     });
    //   }
    //   setCart([]);
    // }
    setCart([]);
    setMenu(item);
    closebox();
  }

  function erase(i) {
    const returnquantity = menu.map((e) => {
      if (e.sku === i.sku) {
        return {
          ...e,
          quantity: e?.quantity + i.quantity,
        };
      } else return e;
    });
    setMenu(returnquantity);
    const filter = cart.filter((e) => {
      return e.sku != i.sku;
    });
    setCart(filter);
    if (cart.length === 0) {
      closebox();
    }
  }

  function checkoutcart(totalsum, totalquantity) {
    const pastbuy = {
      date: new Date().toUTCString(),
      quantity: JSON.parse(totalquantity),
      sum: JSON.parse(totalsum),
    };
    if (cart.length != 0) {
      if (history.length === 0) {
        setHistory([pastbuy]);
      } else {
        setHistory((prev) => [...prev, pastbuy]);
      }

      setNone("inline-block");
      setTimeout(() => {
        setNone("none");
      }, 2000);
      deleteAll();
      closebox();
    } else return;
  }
  useEffect(() => {
    console.table(history);
  }, [history]);

  const totalsum = cart
    ?.map((x) => x.sum)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);
  const totalquantity = cart
    ?.map((x) => x.quantity)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);

  return (
    <>
      <p style={{ display: `${none}`, textAlign: "center" }}>
        Thank for the purchase!
      </p>
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
                        erase(i);
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
                {cart.length == 0 ? "" : totalsum}
              </TableCell>
              <TableCell align="right">
                <Button
                  style={{ color: "black" }}
                  onClick={() => {
                    checkoutcart(totalsum, totalquantity);
                  }}
                >
                  CHECKOUT
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
