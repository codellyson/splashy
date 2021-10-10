import { useColorModeValue } from '@chakra-ui/color-mode';
import {FaUser, } from 'react-icons/fa';
import {  HiCollection } from 'react-icons/hi';
import { MdHome} from 'react-icons/md';
import { Box, Flex } from '@chakra-ui/layout';
import NavItem from '../Navs/NavItem';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const SidebarContent = props => {
  const { path } = useRouteMatch();
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Link
          fontSize="4xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold" as="a"
          to="/"
          
        >
          SPLASHY
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavLink activeClassName="active" to={`${path}/photos`}>
          <NavItem icon={MdHome}>Photos</NavItem>
        </NavLink>
        <NavLink to={`${path}/collections`}>
          <NavItem icon={HiCollection}> Collections</NavItem>{' '}
        </NavLink>
        <NavLink to={`${path}/users`}>
          {' '}
          <NavItem icon={FaUser}>Users</NavItem>
        </NavLink>
      </Flex>
    </Box>
  );
};
export default SidebarContent;
