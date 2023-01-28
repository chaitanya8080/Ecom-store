import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFailure, fetchQuerySuccess, fetchRequest } from "../Redux/Action";

function Search() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.queryProduct);
  const isLoading = useSelector((state) => state.isLoading);

  const handleClick = () => {
    dispatch(fetchRequest());
    axios(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => dispatch(fetchQuerySuccess(res.data.products)))
      .catch((err) => dispatch(fetchFailure()));
  };

  return (
    <Box>
      <Center>
        <Box width="60%" mt="30px">
          <Flex gap="10px">
            <Input
              placeholder="Search Products"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleClick}>
              Search
            </Button>
          </Flex>
        </Box>
      </Center>
      {isLoading && <Text>Loading...</Text>}
      <Box>
        <Grid
          templateColumns="repeat(3,1fr)"
          gap="20px"
          width="80vw"
          margin="30px auto"
        >
          {products.length > 0 ? (
            products.map((el) => (
              <Box
                key={el.id}
                id={el.id}
                boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}
                padding="10px"
                _hover={{
                  transform: "scale(1.04)",
                  transition: "0.3s ease-in-out",
                  background:'RGB(244 213 156)'
                }}
                borderRadius="10px"
              >
                <Image src={el.images[0]} width="100%" height={"300px"} />
                <Text>{el.brand}</Text>
                <Text>category : {el.category}</Text>
                <Text>description:{el.description}</Text>
                <Text>price:{el.price}</Text>
              </Box>
            ))
          ) : (
            <Text> No Data Found </Text>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Search;
