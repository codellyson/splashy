import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Flex, Box, Stack, Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorModeValue, chakra } from '@chakra-ui/react';
import { Button, IconButton } from '@chakra-ui/button';
import '../utils/httpClient';
import ImageCard from '../components/Cards/ImageCard';
import 'moment';
import Moment from 'react-moment';
import AlertNotification from '../components/Cards/AlertNotification';
function CollectionPreview() {
  const [collection, setCollection] = useState({});
  const [collectionPhotos, setCollectionPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (!collection.length) {
      setLoading(true);
      axios
        .get(`/collections/${id}`)
        .then(response => {
          setCollection(response.data);
          setLoading(false);
        })
        .catch(error => {
          alert(error);
          setLoading(false);
        });
    } else {
      return false;
    }
  }, [id]);

  useEffect(() => {
    setLoading(true);
    // if (!collectionPhotos.length) {
    axios
      .get(`/collections/${id}/photos?page=${page}`)
      .then(response => {
        setCollectionPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        if (error.response) {
          setIsOpen(true);
          setErrorMessage(error.response.data.errors);
          setLoading(false);
        } else if (error.request.status === 0) {
          setIsOpen(true);
          setErrorMessage('Network Error');
          setLoading(false);
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      });
    // } else {
    //   return false;
    // }
  }, [id, page]);
  return (
    <div>
      <AlertNotification
        errorMessage={ErrorMessage}
        alertHeader="Notification"
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        bg={useColorModeValue('#F9FAFB', 'gray.600')}
        p={50}
        W="600px"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg={useColorModeValue('white', 'gray.800')}
          w="full"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={collection?.cover_photo?.urls?.full}
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color={useColorModeValue('brand.600', 'brand.400')}
              >
                {collection?.title}
              </chakra.span>
              <Link
                display="block"
                color={useColorModeValue('gray.800', 'white')}
                fontWeight="bold"
                fontSize="xl"
                mt={2}
                _hover={{ color: 'gray.600', textDecor: 'underline' }}
              >
                {collection?.description === null
                  ? 'Description not available'
                  : collection?.description}
              </Link>
            </Box>
            <Flex bg={useColorModeValue('#F9FAFB', 'gray.600')} w="full">
              <IconButton
                size="md"
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
                      {collection?.total_photos}
                    </chakra.span>
                  </>
                }
              />
            </Flex>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src={collection?.user?.profile_image.large}
                    alt="Avatar"
                  />

                  <Link
                    mx={2}
                    fontWeight="bold"
                    color={useColorModeValue('gray.700', 'gray.200')}
                  >
                    {`${collection?.user?.first_name} ${collection?.user?.last_name}`}
                  </Link>
                </Flex>

                <Button
                  colorScheme="gray"
                  as="span"
                  mx={1}
                  fontSize="sm"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  <Moment format="DD/MM/YYYY" date={collection?.published_at} />
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex alignItems="center" flexDir="column">
        <chakra.h1 fontSize="3xl" textAlign="center">
          {' '}
          Collection Photos{' '}
        </chakra.h1>
        {!collectionPhotos.length ? (
          <h1>Loading photos ...</h1>
        ) : loading ? (
          <Box height="50vh">Loading collections photos please wait...</Box>
        ) : (
          <div>
            <Flex wrap="wrap" justifyContent="center" alignItems="center">
              {collectionPhotos.map(photo => (
                <ImageCard data={photo} key={photo.id} />
              ))}
            </Flex>
            <Flex justifyContent="center">
              <Stack direction="row" spacing={4} align="center">
                <Button
                  isLoading={loading}
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => setPage(page > 0 ? page - 1 : page)}
                >
                  Previous
                </Button>
                <Button
                  isLoading={loading}
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </Stack>
            </Flex>
          </div>
        )}
      </Flex>
    </div>
  );
}

export default React.memo(CollectionPreview);
