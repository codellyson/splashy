import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { useRouteMatch } from 'react-router';

export default function UserCard({user}) {
 const {path} = useRouteMatch()
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        m="4"
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={"https://source.unsplash.com/1600x900/?nature,water"
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              user?.profile_image?.large
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'xl'} textAlign="center"fontWeight={500} fontFamily={'body'}>
              {`${user.first_name === null?"":user.first_name} ${user.last_name === null?"":user.last_name}`}
            </Heading> 
            <Text as="p"  textAlign="center" display="block" color={'gray.500'} px="3">
            <Link href={user.portfolio_url}>{user.portfolio_url===null?"":user.portfolio_url}</Link>
            </Text>
            
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.total_likes}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Likes
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.total_photos}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Photos
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            as="a"
            href={`${path}/${user.username}`}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            View PortFolio
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
