import React from 'react';
import logo from './logo.png';
import Head from 'next/head'
import HighFive from "react-highfive";
import Typewriter from "typewriter-effect";
import {
  Heading,
  Text,
  Flex,
  Stack,
} from '@chakra-ui/react'

import Enclose from '../components/Enclose'
console.log(logo);
export default function Blog() {

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
        justifyContent="left"
        alignItems="flex-start"
        m="1 auto 25rem auto"
        ml="4"
        maxWidth="700px"
        px={2}
      >       

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          
          <Heading mb={1} color="black">Hi!</Heading>
          <Text style={{ fontSize: 25 }} color="black">I'm a Computer Science Undergrad at IIITD. I am dev enthusiast and programmer who loves to try and solve new problems. Exploring research in Networks and Security Lab. I am also a part time data analyst.</Text>
          <br>
          </br>
          <Text style={{ fontSize: 25 }} color="#00A3C4">
          <Typewriter
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Greetings!")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Thanks for Coming :)")
       .start();
       }}
       />
          </Text>
        </Flex>
      </Stack>
    </Enclose>
    
  )
}