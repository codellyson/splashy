import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { useColorModeValue, chakra } from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/react';
import { useRouteMatch } from 'react-router';
function CollectionCard({ collection }) {
  const { url } = useRouteMatch();
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
          <Avatar
            name={`${collection.user.first_name} ${collection.user.last_name}`}
            src={collection.user.profile_image.large}
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue('brand.500', 'brand.400')}
            alt={`${collection.user.first_name} ${collection.user.last_name}`}
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue('gray.800', 'white')}
          fontSize={{ base: '2xl', md: '3xl' }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {collection.title}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
          {collection.description === null
            ? 'Description Not Available'
            : collection.description}
        </chakra.p>

        <Flex
          justifyContent="space-between"
          margin="1rem 0"
          alignItems="center"
        >
          <Link href={`${url}/${collection.id}`}>
            {' '}
            <Button colorScheme="green">View Collection</Button>
          </Link>
          <Link
            fontSize="xl"
            color={useColorModeValue('brand.500', 'brand.300')}
          >
            {`${
              collection.user.first_name === null
                ? ''
                : collection.user.first_name
            } ${
              collection.user.last_name === null
                ? ''
                : collection.user.last_name
            }`}
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
export default React.memo(CollectionCard);
