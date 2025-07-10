import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Switch,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CiHeart, CiWallet } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AuthContext } from "../AuthContext/AuthProvider";

export const Cart = () => {
  const toast = useToast();
  const {
    setCart = () => {},
    auth,
    counter = () => {},
    count = 0,
    totalPrice = 0,
    calculatePrice = () => {},
    walletBalance = 0,
    setWalletBalance = () => {},
    useWallet = false,
    setUseWallet = () => {},
    clearCart = () => {},
  } = useContext(AuthContext) || {};

  
  useEffect(() => {
  setCart(); 
}, []);


  const handleCheckout = () => {
    if (useWallet) {
      if (walletBalance >= totalPrice) {
        setWalletBalance(walletBalance - totalPrice);
        toast({
          title: "Checkout Successful",
          description: "Payment made using wallet balance.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        clearCart(); 
      } else {
        toast({
          title: "Insufficient Wallet Balance",
          description: "Please add more funds or uncheck wallet usage.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
    }
  };

  return (
    <HStack>
      <Flex minWidth="max-content" alignItems="center" gap="4" w="80%" margin="auto" mt={20}>
        <Box w="65%">
          <Box display="flex" alignItems="center">
            <Heading>Cart</Heading>
            <Text fontSize={20}>({count} item)</Text>
          </Box>

          <Box>
            <Accordion allowToggle border="0px solid white">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" textAlign="left">
                      <Text fontSize={30}>Pickup and delivery options <AccordionIcon /></Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex w="90%">
                    {}
                    {["Shipping", "Pickup", "Delivery"].map((type, index) => (
                      <Box
                        key={type}
                        w={250}
                        h={100}
                        display="flex"
                        alignItems="center"
                        border={index === 1 ? "1px solid black" : "1px solid #ccc"}
                        flexDirection="column"
                        justifyContent="center"
                        borderRadius={5}
                        ml={index > 0 ? 5 : 0}
                      >
                        <Image src={`https://i5.walmartimages.com/seo/sample-${index}.svg`} />
                        <Text fontSize={12} color={index === 1 ? "black" : "#ccc"}>{type}</Text>
                        <Text fontSize={12} color="#ccc">
                          {index === 1 ? "Available" : "Not Available"}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          {}
          <Box h={400} borderRadius={8} className="cart2">
            <Box h={100} bg="#F2F8FD" borderRadius={8} p={5}>
              <Flex alignItems="center">
                <Image src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" />
                <Text fontSize={20} ml={5}>
                  Shipping, arrives by Friday, July 18 <br /> <u>95829</u>
                </Text>
              </Flex>
            </Box>

            <Box p={5}>
              <Text>Sold by <u>eCosmetics</u></Text>
              <Text>Fulfilled by Walmart</Text>
              <Button fontSize={10} h={8} color="#0071DC" mt={2}>Best seller</Button>
              <Flex justifyContent="flex-end" mt={4}>
                <Text fontSize={20} color="green">Total: ${totalPrice.toFixed(2)}</Text>
              </Flex>
              <Flex justifyContent="flex-end" mt={3}>
                <Box display="flex" alignItems="center" fontSize={20}>
                  <Button borderRadius="full">-</Button>
                  &nbsp; {count} &nbsp;
                  <Button borderRadius="full">+</Button>
                </Box>
              </Flex>
            </Box>
          </Box>

          {}
          <Box borderRadius={8} className="cart2" mt={10} p={10}>
            <Text fontSize={20}>Recommended with your order</Text>
            <Flex justifyContent="space-evenly" mt={5}>
              <Box>
                <Flex justifyContent="flex-end" fontSize={30}>
                  <Circle><CiHeart /></Circle>
                </Flex>
                <Image
                  src="https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFFhttps://i5.walmartimages.com/seo/CeraVe-SPF-50-Face-Body-Mineral-Sunscreen-Stick-for-Sensitive-Skin-Kids-Adults-0-47-oz_7477ff50-6886-4ef3-a944-2e628423e47a.7d8a5ce533d3d1c9885fabfa09465e5f.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                  alt="product"
                  height="200px"
                />
                <Text fontSize={13}>Sponsored</Text>
                <Text fontWeight="bold">$16.99</Text>
                <Text>Shampoo for men and women...</Text>
                <Button
                  border="1px solid black"
                  borderRadius={20}
                  bg="white"
                  onClick={() => {
                    counter();
                    calculatePrice(16.99);
                  }}
                >
                  <GoPlus /> Add
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>

        {}
        <Box w="35%" mt={-600} className="cart2" p={10} borderRadius={20}>
          {}
          <Flex alignItems="center" justifyContent="space-between" mb={5}>
            <Flex alignItems="center" gap={2}>
              <CiWallet size={24} />
              <Text>Use Wallet (${walletBalance.toFixed(2)})</Text>
            </Flex>
            <Switch
              size="md"
              colorScheme="teal"
              isChecked={useWallet}
              onChange={(e) => setUseWallet(e.target.checked)}
            />
          </Flex>

          {}
          <ChakraLink
            as={ReactRouterLink}
            to={auth ? "/product/checkout" : "/account/signUp"}
            textDecoration="none"
            _hover="none"
            onClick={handleCheckout}
          >
            <Button w="100%" bg="#004F9A" borderRadius={20} color="white">
              Continue to checkout
            </Button>
          </ChakraLink>

          <Text mt={5} textAlign="center">
            For the best shopping experience <u>sign in</u>
          </Text>

          <hr style={{ marginTop: 20, marginBottom: 20 }} />

          {}
          <Box>
            <Flex justifyContent="space-between">
              <Text>Subtotal ({count} item)</Text>
              <Text fontWeight="bold" color="green">${totalPrice.toFixed(2)}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Savings</Text>
              <Text color="green">$0.00</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Shipping</Text>
              <Text>$0.00</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Taxes</Text>
              <Text>Calculated at checkout</Text>
            </Flex>
            <hr style={{ margin: "10px 0" }} />
            <Flex justifyContent="space-between" fontWeight="bold">
              <Text>Estimated total</Text>
              <Text color="green">${totalPrice.toFixed(2)}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </HStack>
  );
};
