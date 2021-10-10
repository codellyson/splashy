import { Box, Flex, Stack,  Badge  } from '@chakra-ui/layout';
import { useColorModeValue, chakra } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { MdVerifiedUser } from 'react-icons/md';
import { DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import "../../utils/httpClient"
function ImageCard({ data }) {
 
  return (
    <Flex bg={useColorModeValue('#F9FAFB', 'gray.600')} p={10}>
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src={data.urls.regular}
          alt="avatar"
        />

        {data?.user?.username && <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdVerifiedUser} h={6} w={6} color="white" />

          <Link href={`/splashy/users/${data?.user?.username}`}>
            {' '}
            <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              {data?.user?.name}
            </chakra.h1>
          </Link>
        </Flex>}

        <Box py={4} px={6}>
          {data?.likes && <chakra.p py={2} color={'gray.700'}>
            <Stack direction="row">
              <Badge colorScheme="green"padding={2}>Likes <chakra.span bgColor="green.600" p={1} rounded="xl" color="white"> {data.likes}</chakra.span></Badge>
            </Stack>
          </chakra.p>}

          <Flex justifyContent="space-evenly" my="3">
            <Link as="a" href={ data?.links?.download_location === undefined ?data?.urls?.full:data?.links?.download+"?force=true"} download>
            <Button
              size="lg"
              leftIcon={<DownloadIcon />}
              colorScheme="green"
              color={'white'}
              mr={2}
              p={4}
            >
             Download
            </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ImageCard;
