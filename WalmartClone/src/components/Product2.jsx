import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
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

const Product2 = () => {
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
                    src="https://i5.walmartimages.com/seo/George-Men-s-Boxer-Brief-Lined-Swim-Shorts-with-UPF-50-7-inseam-Sizes-S-3XL_f59e8919-7d38-4876-9d9f-c26228e37ea5.320a35f5546db5f234567c6ea358291e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                    h="100%"
                  />
                  <Text fontSize={20} className="roboto-bold">$12.98</Text>
                  <Text>George Men's Boxer Brief <br />
                  Lined Swim Shorts woth UPF...
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
                    src="https://i5.walmartimages.com/seo/Sofia-Jeans-Women-s-Tie-Front-Maxi-Dress-Sizes-XS-XXXL_21f2d859-978a-41dc-b65e-6a03afa1ada8.8c76b16e6abdf5b7d874da6c15daa03d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
                    h="100%"
                  />
                   <Text fontSize={20} className="roboto-bold">$9.98</Text>
                  <Text>No Boundaries junior's Daisy <br />
                  Print O-Ring dress ,...
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
                    src="https://i5.walmartimages.com/seo/Hanes-Essentials-Men-s-Short-Sleeve-T-Shirt-up-to-Sizes-3XL_dc67a752-dd46-4c02-a490-47f76c363708.7567bb7cf914740f0602e5d25b32db51.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
                    h="100%"
                  />
                   <Text fontSize={20} className="roboto-bold">$14.98</Text>
                  <Text> No Boundaries junior's Yellow<br />
                  Gingham Halteter Bandeau
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

          <Box bg="green" w="48%">
            <Box mb={-10} display={"flex"} justifyContent={"flex-end"}>
              <Button borderRadius={"100%"} fontSize={20}>
                {videoControl ? <BiPause /> : <BiPlay />}
              </Button>
            </Box>
            <video src={video1} autoPlay loop muted></video>
          </Box>
        </Flex>
      </HStack>
    </>
  );
};

export default Product2;
