import React from 'react'

import {
    useColorMode,
    Button,
    Flex,
    Box,
    Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'


const Enclose = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'pink',
        dark: '#F6AD55'
    }

    const color = {
        dark: 'white'
    }

    const navHoverBg = {
        dark: 'red.400',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        top: 0;
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1600px"
                minWidth="356px"
                height="100px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 30]}
                py={2}
                mt={0}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box >
                
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        <Text fontSize="lg" fontWeight="bold">
                            Home
                            </Text>
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                        <Text fontSize="lg" fontWeight="bold">
                            Blog
                            </Text>
                        </Button>
                    </NextLink>
                    
                </Box>

            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg="pink"
                height="660"
                color={color[colorMode]}
                px={[0, 4, 40]}
                mt={[4, 8, -10]}
            >
                {children}
            </Flex>
        </>
    )
            
}

export default Enclose



