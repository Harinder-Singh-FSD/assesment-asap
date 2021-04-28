import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  Paper,
  Grid,
  CardMedia,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Product = (props) => {
  const { id, title, price, description, image } = props.list;
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "auto",
      textAlign: "center",
      color: theme.palette.text.secondary,

      margin: "20px",
      height: "22rem",
    },
    media: {
      height: "auto",
      paddingTop: "2%",
    },
    img: {
      maxHeight: "5%",
      maxWidth: "5rem",
    },
    title: {
      color: "black",
      fontStyle: "bold",
    },
    accordion: {
      marginTop: "2%",
      textAlign: "center",
    },
    btn: {
      marginTop: "5%",
      color: "white",
      backgroundColor: "orange",
    },
  }));
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper} elevation={5}>
        <CardMedia className={classes.media}>
          <img src={image} className={classes.img} alt="product" />
        </CardMedia>
        <Divider />
        <Typography variant="p" className={classes.title}>
          {title}
        </Typography>
        <Divider />
        <Typography variant="h6">{`Price : $ ${price}`}</Typography>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={(id) => console.log(id)}
        >
          <AddShoppingCartIcon />
          Add to Cart
        </Button>
      </Paper>
    </Grid>
  );
};

export default Product;
