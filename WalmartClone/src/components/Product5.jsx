import {
    Box,
    Button,
    Circle,
    Flex,
    HStack,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import video1 from "../assets/video1.mp4";
  import { IoIosPause } from "react-icons/io";
  import { BiPause, BiPlay } from "react-icons/bi";
  import { Link } from "react-router-dom";
  import { CiHeart } from "react-icons/ci";
  import { LiaGreaterThanSolid } from "react-icons/lia";
  import boyAndGirl from '../assets/boyAndGirl.png'
  
  const Product5 = () => {
    const [videoControl, setVideoControl] = useState(true);
  
    function handleVideoplayer() {
      setVideoControl((prev) => !prev);
    }
  
    return (
      <>
        <HStack mt={20}>
          <Flex w="100%" justifyContent="space-evenly">
            <Box w="48%">
              <Flex justifyContent="space-between">
                <Box>
                  <Text fontSize={20} className="roboto-bold">Pack like a pro</Text>
                  <Text className="roboto-regular">From suitcases to sunglasses.</Text>
                </Box>
                <Box>
                  <Link>
                    <u>View all</u>
                  </Link>
                </Box>
              </Flex>
              <Flex justifyContent="space-between" >
                <Box>
                  <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                    <Circle>
                      <CiHeart />
                    </Circle>
                  </Box>
                  <Box height={200}>
                    <Image
                      src="https://i5.walmartimages.com/seo/Character-Toddler-Snug-Fit-Two-Piece-Sleep-Set-Sizes-12M-5T_1d04e394-e1e6-4312-a5dd-4e399fec7c14.9f148b7354a744f9cf0836244df17753.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
                      h="100%"
                    />
                    <Text fontSize={20} className="roboto-bold">$12.98</Text>
                    <Text>Character Toddler Snug Fit  <br />
                    Two-Piece Sleep Set...
                    </Text>
                    <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
                  </Box>
                </Box>
  
                <Box>
                <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                    <Circle>
                      <CiHeart />
                    </Circle>
                  </Box>
                  <Box height={200}>
                    <Image
                      src="https://i5.walmartimages.com/seo/Wrangler-Men-s-Straight-Fit-Jean-with-Stretch_1a5243bd-595b-4da6-9b7c-31b487c25ee3.011ffa4f0fbd66958841f38fc4a668fc.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
                      h="100%"
                    />
                     <Text fontSize={20} className="roboto-bold">$9.98</Text>
                    <Text>Wrangler Men's Straight <br />
                    Fit Jean with Stretch,...
                    </Text>
                    <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
                  </Box>
                </Box>
  
                <Box>
                <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                    <Circle>
                      <CiHeart />
                    </Circle>
                  </Box>
                  <Box height={200}>
                    <Image
                      src="https://i5.walmartimages.com/seo/SHORT-SLEEVE-MINI-CA_e8ba3bb8-25d1-413c-a561-08b29d6f541e.6474378b67d77354d50488e39107e22f.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
                      h="100%"
                    />
                     <Text fontSize={20} className="roboto-bold">$14.98</Text>
                    <Text> PRETTYGARDEN Women's Ruched Tiered <br />
                  
                    </Text>
                    <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
                  </Box>
                </Box>
  
                <Box>
                  <Box height={200} display={"flex"} alignItems={"center"} fontSize={40}>
                  <Button fontSize={40} border={"1px solid black"} display={"flex"} alignItems={"center"} p={8} borderRadius={"100%"} w={10} hh={10}>&gt;</Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
  
            <Box bg="green" w="48%" bgImage={boyAndGirl} height={"400px"} borderRadius={8} >
                <Box className="roboto-regular" color="white" m={10}>
                    <Text fontSize={30}>Concert-ready outfits</Text>
                    <Text fontSize={50}>The Festival <br /> Shop</Text>
                    <Button borderRadius={100}>Shop Now</Button>
                </Box>
              
            
            </Box>
          </Flex>
        </HStack>
      </>
    );
  };
  
  export default Product5;
  