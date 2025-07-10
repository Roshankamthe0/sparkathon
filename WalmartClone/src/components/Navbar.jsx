import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Image,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Input,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGridOutline } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { BsUiRadiosGrid, BsCart2 } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart, CiWallet } from "react-icons/ci";
import { BiLogIn, BiUser } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import React, { useContext, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Searchmenu from "./Searchmenu";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const { name, auth, setAuth, setName, handleChange, search, handleSearch, count, totalPrice, signOut } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [drawerstate, setDrawerSate] = useState(false);

  return (
    <HStack>
      <Flex justifyContent="space-between" w="100%" p={2} bg="#0071DC" color="white" alignItems="center">
        {/* Hamburger Menu & Logo */}
        <Box fontSize={30} display={{ base: "block", lg: "none" }}>
          <Box display="flex" alignItems="center" justifyContent="space-evenly">
            {drawerstate
              ? <RxHamburgerMenu onClick={() => { setDrawerSate(prev => !prev); onOpen(); }} />
              : <RxHamburgerMenu onClick={() => { setDrawerSate(prev => !prev); onClose(); }} />}
            <SideNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Image
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
              w="30%"
              m={4}
            />
          </Box>
        </Box>

        {/* Full Logo */}
        <Box p={3} className="logo" display={{ base: "none", lg: "block" }}>
          <Image src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="logo" />
        </Box>

        {/* Departments */}
        <Box display={{ base: "none", lg: "block" }}>
          <Box display="flex" alignItems="center" p={3} className="department">
            <IoGridOutline />
            <Box ml={2}>
              <Menu>
                <MenuButton px={4} py={2}>Departments</MenuButton>
                <MenuList color="black">
                  <MenuItem>All Departments</MenuItem>
                  <MenuDivider />
                  <MenuItem>Deals</MenuItem>
                  <MenuItem>Grocery</MenuItem>
                  <MenuItem>Easter</MenuItem>
                  <MenuItem>Spring Shop</MenuItem>
                  <MenuItem>Home,Garden & Tools</MenuItem>
                  <MenuItem>Clothing,Shoes</MenuItem>
                  <MenuItem>Electronics</MenuItem>
                  <MenuItem>Baby</MenuItem>
                  <MenuItem>Kids</MenuItem>
                  <MenuItem>Toys & Video Games</MenuItem>
                  <MenuItem>Pharmacy,Health & Wellness</MenuItem>
                  <MenuItem>Beauty</MenuItem>
                  <MenuItem>Personal Care</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        {/* Services */}
        <Box display={{ base: "none", lg: "block" }}>
          <Box display="flex" alignItems="center" p={3} className="services">
            <BsUiRadiosGrid />
            <Box ml={2}>
              <Menu>
                <MenuButton px={4} py={2}><Text className="roboto-bold">Services</Text></MenuButton>
                <MenuList color="black">
                  <MenuItem>All Services</MenuItem>
                  <MenuDivider />
                  <MenuItem>Auto Care Center Services</MenuItem>
                  <MenuItem>Pharmacy</MenuItem>
                  <MenuItem>Health & Wellness</MenuItem>
                  <MenuItem>Registry,Lists,& Gift</MenuItem>
                  <MenuItem>Custom Cakes</MenuItem>
                  <MenuItem>Photo Services</MenuItem>
                  <MenuItem>Electronics</MenuItem>
                  <MenuItem>Money Services</MenuItem>
                  <MenuItem>Protection,Home & Tech</MenuItem>
                  <MenuItem>Subscription</MenuItem>
                  <MenuItem>Community & Giving</MenuItem>
                  <MenuItem>Ordering online</MenuItem>
                  <MenuItem>Get inspired</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        {/* Search Bar */}
        <Box w={{ base: "1xl", sm: "100%", md: "100%", lg: "2xl" }}>
          <InputGroup size="md" bg="#FFFFFF" borderRadius="20px">
            <Input
              pr="4.5rem"
              placeholder="Search everything at Walmart"
              borderRadius="20px"
              bg="#FFFFFF"
              color="black"
              fontSize={18}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <InputRightElement width="3rem">
              <Circle
                size="40px"
                bg="#FFC326"
                color="white"
                onClick={() => {
                  handleSearch(searchValue);
                  navigate(`/product/${searchValue}`);
                }}
              >
                <Search2Icon />
              </Circle>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* GiftJoy Link */}
        <ChakraLink as={ReactRouterLink} to="/giftjoy" _hover={{ textDecoration: "none" }}>
          <Box color="white" display={{ base: "none", lg: "block" }}>
            <Box display="flex" alignItems="center" p={3}>
              <CiHeart />
              <Box ml={2}>
                <Text className="roboto-bold">GiftJoy</Text>
              </Box>
            </Box>
          </Box>
        </ChakraLink>

        {/* Wallet Link */}
        <ChakraLink as={ReactRouterLink} to="/wallet" _hover={{ textDecoration: "none" }}>
          <Box display={{ base: "none", lg: "block" }}>
            <Box display="flex" alignItems="center" p={3}>
              <Box fontSize="22px" mr={2}><CiWallet /></Box>
              <Box ml={2}><Text className="roboto-bold">Wallet</Text></Box>
            </Box>
          </Box>
        </ChakraLink>

        {/* Account/Login Menu */}
        <Box color="white" display={{ base: "none", lg: "block" }}>
          <Box display="flex" alignItems="center" p={3}>
            <Menu>
              <MenuButton px={4} py={2} border="none" borderRadius="md">
                <Box display="flex" alignItems="center">
                  <BiUser />
                  <Box ml={2}>
                    <Text fontSize="12px">{auth ? `Hi, ${name}` : "Sign In"}</Text>
                    <Text className="roboto-bold">Account</Text>
                  </Box>
                </Box>
              </MenuButton>
              <MenuList p={10}>
                {!auth && (
                  <>
                    <ChakraLink as={ReactRouterLink} to="/account/signUp" _hover="none">
                      <Button w="100%" bg="#004F9A" borderRadius={20} color="white">
                        Sign in or Create Account
                      </Button>
                    </ChakraLink>
                    <br /><br />
                  </>
                )}
                <hr />
                <Text mt={10} color="black">
                  <Box display="flex" alignItems="center" cursor="pointer">
                    <BiLogIn />
                    <Text ml={2} onClick={() => navigate("/account/login")}>Login (if you have Walmart account)</Text>
                  </Box>
                  <Box display="flex" alignItems="center" cursor="pointer" mt={5}>
                    <RiHistoryFill />
                    <Text ml={2}>Purchase history</Text>
                  </Box>
                  <Box display="flex" alignItems="center" cursor="pointer" mt={5}>
                    <VscServerProcess />
                    <Text ml={2}>Walmart +</Text>
                  </Box>
                  {auth && (
                    <Box display="flex" alignItems="center" cursor="pointer" mt={5} onClick={signOut}>
                      <IoIosLogOut />
                      <Text ml={2}>Sign out</Text>
                    </Box>
                  )}
                </Text>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        {/* Cart */}
        <Box color="white">
          <Box display="flex" alignItems="center" p={3}>
            <ChakraLink as={ReactRouterLink} to="/home/cart" _hover="none">
              <Box bg="#FFC326" color="black" borderRadius="100%" w="20px" h="20px" display="flex" justifyContent="center" alignItems="center">
                <span>{count}</span>
              </Box>
              <Box fontSize={25}><BsCart2 /></Box>
              <Box fontSize={12}><span>$ {totalPrice}</span></Box>
            </ChakraLink>
          </Box>
        </Box>
      </Flex>
      <Searchmenu />
    </HStack>
  );
};

export default Navbar;
