import React from 'react';
import { Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Main from './layout/Main';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './pages/Pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact/>

        <Route path="/splashy" component={  Main} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
