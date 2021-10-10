import React from 'react';
import SidebarContent from '../components/Sidebar/SidebarContent';
import { DrawerContent, DrawerOverlay, Drawer } from '@chakra-ui/modal';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FiMenu, FiSearch } from 'react-icons/fi';
import {  FaGithub } from 'react-icons/fa';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import Icon from '@chakra-ui/icon';
import { useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Route, useRouteMatch } from 'react-router';
import CollectionPreview from '../pages/CollectionPreview';
import PhotoPage from '../pages/PhotoPage';
import CollectionPage from '../pages/CollectionPage';
import UserPage from '../pages/UserPage';
import UserPreview from '../pages/UserPreview';
function Main() {
  const sidebar = useDisclosure();
  const { path } = useRouteMatch();
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
            <InputLeftElement color="gray.500" children={<FiSearch />} />
            <Input placeholder="Search for images." />
          </InputGroup>
          <Flex align="center">
            <Link href="https://github.com/Dellysn/splashy.git"> <Icon color="gray.500" as={FaGithub} cursor="pointer"  /></Link>
           
            
          </Flex>
        </Flex>
        <Box
          as="main"
          p="4"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Route
            component={CollectionPage}
            path={`${path}/collections`}
            exact
          />
          <Route
            component={CollectionPreview}
            path={`${path}/collections/:id`}
          />
          <Route component={PhotoPage} path={`${path}/photos`} exact />
          <Route component={UserPage} path={`${path}/users`} exact />
          <Route component={UserPreview} path={`${path}/users/:username`} />
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
