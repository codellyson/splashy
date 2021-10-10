import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../utils/httpClient';
import CollectionCard from '../components/Cards/CollectionCard';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/collections?page=${page}`)
      .then(response => {
        setCollections(response.data);
        setLoading(false);
      })
      .catch(err => {
        alert(err.response.data);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {!collections.length ? (
          <h1>Loading collections please wait...</h1>
        ) : loading ? (
          <Box height="80vh">Loading collections please wait...</Box>
        ) : (
          collections.map((collection, index) => (
            <CollectionCard collection={collection} key={index} />
          ))
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
};

export default React.memo(CollectionPage);
