import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { useColorModeValue, chakra,  } from '@chakra-ui/react';
import { Box, Stack, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <chakra.header>
      <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={6} py={3} maxW="full">
          <Box
            display={{ md: 'flex' }}
            alignItems= 'center' 
            justifyContent={{ md: 'space-between' }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                <chakra.a
                  fontSize={['xl', '2xl']}
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={useColorModeValue('gray.800', 'white')}
                  _hover={{
                    color: useColorModeValue('gray.700', 'gray.300'),
                  }}
                >
            Splashy
                </chakra.a>
              </Box>

              <Flex display={{ md: 'none' }} alignItems="center">
              <chakra.a
                display="block"
                mx={4}
                mt={[2, 0]}
                fontSize="sm"
                color={useColorModeValue('gray.700', 'gray.200')}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue('brand.400', 'blue.400') }}
                href="https://github.com/Dellysn/splashy.git"
              >
               <FaGithub size="20"/>
              </chakra.a>
              </Flex>
            </Flex>

            <Box display={['none', 'flex']} alignItems={{ md: 'center' }}>
              
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue('gray.700', 'gray.200')}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue('brand.400', 'blue.400') }}
                href="https://github.com/Dellysn/splashy.git"
              >
               <FaGithub size="40"/>
              </chakra.a>
            </Box>
          </Box>
        </Box>
      </chakra.nav>

      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://source.unsplash.com/random)"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={['2xl', '3xl']}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
             An unofficial Unsplash Client
            </Heading>

            <chakra.p>
              <Button colorScheme="green">
              <Link to="/splashy/photos">Get Started</Link>
              </Button>
            </chakra.p>
           
          </Stack>
        </Flex>
                  <chakra.p textAlign="center" fontSize="md" textTransform="uppercase" py="4">Powered by Vercel and  <chakra.a href="https://unsplash.com/developers" textDecoration="underline">Unsplash API</chakra.a></chakra.p>

      </Box>
    </chakra.header>
  );
};