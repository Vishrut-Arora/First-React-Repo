import React from 'react';
import logo from './logo.png';
import Head from 'next/head';
import HighFive from "react-highfive";
import {
  Heading,
  Text,
  Flex,
  Stack,
} from '@chakra-ui/react'

import Enclose from '../components/Enclose'
console.log(logo);
export default function Index() {

  return (
    <Enclose>
      
      <Head>
        <title>Hi Vishrut</title>
      </Head>
      <div>
            <HighFive position={{horizontal: "right", vertical: "top"}} />
        </div>      
      <Stack
        as="main"
        spacing={10}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
       
   <img src="https://gcdn.pbrd.co/images/f432KyP4AQN5.png?o=1" alt="Logo" />;
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          
          <Heading mb={1} color="black">Hi, I'm Vishrut</Heading>
          <Text style={{ fontSize: 25 }} color="black">Welcome everyone</Text>
        </Flex>
      </Stack>
    </Enclose>
  )
}