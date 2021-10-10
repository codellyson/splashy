import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../utils/httpClient';
import { VisuallyHidden } from '@chakra-ui/react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  chakra,Flex,IconButton,

  
} from '@chakra-ui/react';
import ImageCard from "../components/Cards/ImageCard"
import { useParams } from 'react-router';
import { FaInstagram,FaPaypal, FaTwitter } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
function UserPreview() {
  const [user, setUser] = useState({});
  const [userPhotos, setUserPhotos] = useState([])
  const { username } = useParams();

  useEffect(() => {
    if (!user.length) {
      axios
        .get(`/users/${username}`)
        .then(response => setUser(response.data))
        .catch(err => alert(err.response.data));
    }
  }, [username]);useEffect(() => {
    if (!userPhotos.length) {
      axios
        .get(`/users/${username}/photos`)
        .then(response => setUserPhotos(response.data))
        .catch(err => alert(err.response.data));
    }
  }, [username]);
  return (
    <div>
      <Center py={6}>

        { !user? (<h1>Loading User details, please wait...</h1>):(

       
        <Box
          maxW={'520px'}
          w={'full'}
          bg="white"
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
        >
          <Avatar
            size={'xl'}
            src={user?.profile_image?.large}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {`${user.first_name === null ? '' : user.first_name} ${
              user.last_name === null ? '' : user.last_name
            }`}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {`@${user?.username === null ? '' : user?.username}`}
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            <Link
              href={`${user?.portfolio_url === null ? '' : user?.portfolio_url}`}
            >
              {`${user?.portfolio_url === null ? '' : user?.portfolio_url}`}
            </Link>
          </Text>
          <Text
            textAlign={'center'}
            color='gray.700'
            px={3}
          >
            {`${user?.bio === null ? '' : user?.bio}`}
          </Text>
          <Flex justifyContent="center" py="4"> <Stack direction={'row'} spacing={6} >
            <SocialButton label={'Twitter'} href={`https://www.twitter.com/${user.twitter_username}`}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'PayPal'} href={`https://www.paypal.com/${user.paypal_email}`}>
              <FaPaypal/>
            </SocialButton>
            
            <SocialButton label={'Instagram'} href={`https://www.instagram.com/${user.instagram_username}`}>
              <FaInstagram />
            </SocialButton>
          </Stack></Flex>
          <Flex bg='#F9FAFB' w="full" justifyContent="center" wrap="wrap">
              <IconButton
                size="sm"
                mr="3"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3}>Total Photos</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.total_photos}
                    </chakra.span>
                  </>
                }
              />
              <IconButton
                size="sm"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3} fontSize="sm">Total Collections</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.total_collections}
                    </chakra.span>
                  </>
                }
              /> 
              <IconButton
                size="sm"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3} fontSize="sm">Total Likes</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.total_likes}
                    </chakra.span>
                  </>
                }
              />
               <IconButton
                size="sm"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3} fontSize="sm">Total  Downloads</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.downloads}
                    </chakra.span>
                  </>
                }
              />
              <IconButton
                size="sm"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3} fontSize="sm">Total  Followers</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.followers_count}
                    </chakra.span>
                  </>
                }
              /><IconButton
                size="sm"
                isRound
                my={2}
                px={2}
                icon={
                  <>
                    <chakra.span px={3} fontSize="sm">Total  Followings</chakra.span>
                    <chakra.span
                      px={2}
                      py={2}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="red.100"
                      bg="red.600"
                      rounded="full"
                    >
                      {user?.following_count}
                    </chakra.span>
                  </>
                }
              />
            </Flex>
            

          <Stack mt={8} direction={'row'} spacing={4}>
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
              Message
            </Button> */}
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
         ) }
      </Center>
      <Flex flexDir="column" alignItems="center" justifyContent="center" >
              <chakra.h1  fontSize="3xl" py="6">
                Featured Photos
              </chakra.h1>

              <Flex wrap="wrap" justifyContent="center" alignItems="center">
                {
                  user?.photos?.map(photo=>(
                    <ImageCard data={photo} key={photo.id} />
                  ))
                }


              </Flex>

      </Flex>

       <Flex flexDir="column" alignItems="center" justifyContent="center" >
              <chakra.h1  fontSize="3xl" py="6">
              User's Photos
              </chakra.h1>

              <Flex wrap="wrap" justifyContent="center" alignItems="center">
                {
                 !userPhotos.length? (<h1>Loading Photos Please wait...</h1>): userPhotos.map(photo=>(
                    <ImageCard data={photo} key={photo.id} />
                  ))
                }


              </Flex>

      </Flex>
      

    </div>
  );
}

export default React.memo(UserPreview);
