import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      height="80px"
      align="center"
      justifyContent="space-between"
      boxShadow="base"
      bg={'purple.700'}
    >
      <Box ml="20px">
        <Text fontStyle="normal" fontWeight={'bold'} fontSize="xl" ml={'500px'} color='white'>
          <Link to="/">Gadgets Store</Link>
        </Text>
      </Box>
      <Flex>
        <Text mr="60px" fontSize="2xl" color='white'>
          <Link to="/search">Search</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
