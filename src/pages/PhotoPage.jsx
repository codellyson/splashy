import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../utils/httpClient';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import ImageCard from '../components/Cards/ImageCard';
import { Button } from '@chakra-ui/button';
import AlertNotification from '../components/Cards/AlertNotification';
function PhotoPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [ErrorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/photos?page=${page}`)
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
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
  }, [page]);
  return (
    <div>
      <AlertNotification
        errorMessage={ErrorMessage}
        alertHeader="Notification"
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {!photos.length ? (
          <h1>Loading please wait...</h1>
        ) : loading ? (
          <Box height="80vh">Loading collections please wait...</Box>
        ) : (
          photos.map((data, index) => <ImageCard key={index} data={data} />)
        )}
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
  );
}

export default React.memo(PhotoPage);
