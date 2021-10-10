import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../utils/httpClient';
import UserCard from '../components/Cards/UserCard';
import { Flex, Stack, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import AlertNotification from '../components/Cards/AlertNotification';
function UserPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  let [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const onClose=()=>setIsOpen(false)

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
      <Flex wrap="wrap" justifyContent="center" alignItems="center">
        {!photos?.length ? (
          <h1>Loading users please wait</h1>
        ) : loading ? (
          <Box height="80vh">Loading collections please wait...</Box>
        ) : (
          photos?.map(photo => <UserCard user={photo.user} key={photo.id} />)
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

export default React.memo(UserPage);
