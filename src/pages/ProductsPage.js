import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { Grid, Toolbar } from "@material-ui/core";
import axios from "axios";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: "7%" }}
    >
      {products.map((item) => {
        return <Product list={item} />;
      })}
    </Grid>
  );
};
export default ProductsPage;
