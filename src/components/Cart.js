import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
const Cart = () => {
  const useStyles = makeStyles((theme) => ({
    cart: {
      fontSize: "30px",
      color: "white",
    },
  }));
  const classes = useStyles();
  return (
    <IconButton>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon className={classes.cart}></ShoppingCartIcon>
      </Badge>
    </IconButton>
  );
};

export default Cart;
