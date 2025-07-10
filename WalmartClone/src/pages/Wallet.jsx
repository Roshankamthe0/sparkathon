import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Wallet = () => {
  const [amount, setAmount] = useState(null); // null = not checked yet

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const email = userInfo?.email;

    if (email === "siddheshkamthe8@gmail.com") {
      setAmount(100);
    } else {
      setAmount(0);
    }
  }, []);

  if (amount === null) return null; 

  return (
    <Box p={5} textAlign="center">
      <Text fontSize="2xl">Wallet Balance</Text>
      <Text fontSize="4xl" fontWeight="bold" mt={4}>${amount}</Text>
      {amount === 100 && (
        <Text fontSize="md" mt={2} color="green.500">
          🎉 Roshan Kamthe sent you $100.
        </Text>
      )}
    </Box>
  );
};

export default Wallet;
