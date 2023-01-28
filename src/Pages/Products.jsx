import { Box, Grid, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFailure, fetchRequest, fetchSuccess } from "../Redux/Action";

function Products() {
  const [categoryName, setCategoryName] = useState(
    JSON.parse(localStorage.getItem("category"))
  );
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.product);
  const isLoading = useSelector((state)=>state.isLoading);

  useEffect(() => {
    dispatch(fetchRequest());
    axios(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => dispatch(fetchSuccess(res?.data?.products)))
      .catch((err) => dispatch(fetchFailure()));
  }, [categoryName,dispatch]);

  return (
    <Box>
      {isLoading && <Text>Please wait...</Text>}
      <Grid
        templateColumns="repeat(3,1fr)"
        gap="20px"
        width="80vw"
        margin="30px auto"
      >
        {products &&
          products.map((el) => (
            <Box key={el.id} id={el.id}  padding="10px"
            _hover={{transform:"scale(1.04)",transition:"0.3s ease-in-out",   background:'RGB(244 213 156)'}}
            borderRadius="10px"
            boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
            >
              <Image src={el.images[0]} width="100%" height={"300px"}/>
              <Text>{el.brand}</Text>
              <Text>category  :  {el.category}</Text>
              <Text>description : {el.description}</Text>
              <Text>price : {el.price}</Text>
            </Box>
          ))}
      </Grid>
    </Box>
  );
}

export default Products;
