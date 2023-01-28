import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products/categories").then((res) =>
      setCategory(res.data)
    );
  }, []);

  const handleClick = (el) => {
    localStorage.setItem("category", JSON.stringify(el));
  };
  
  return (
    <Box>
      <Grid
        templateColumns="repeat(3,1fr)"
        gap="20px"
        width="80vw"
        margin="30px auto"
      >
        {category &&
          category.map((el, i) => (
            <Link to="/products" key={i}>
              <Box
                id={i}
                boxShadow="md"
                p="6"
                rounded="md"
                bg="white"
             
                _hover={{transform:"scale(1.04)",transition:"0.3s ease-in-out"}}
                onClick={() => handleClick(el)}
              >
                <Text fontSize="xl">{el}</Text>
              </Box>
            </Link>
          ))}
      </Grid>
    </Box>
  );
}

export default Home;
