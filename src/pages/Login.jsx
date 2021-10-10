import React from 'react';
import { Button } from '@chakra-ui/button';
const Login = () => {
  return (
    <div>
      <Button onClick={alert('Login here')}>Login</Button>
    </div>
  );
};

export default React.memo(Login);
