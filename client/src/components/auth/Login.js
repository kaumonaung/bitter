import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div>
      <Link to='/'>
        <Button variant='contained' color='primary'>
          Home
        </Button>
      </Link>
      <Link to='/register'>
        <Button variant='outlined' color='primary'>
          Register
        </Button>
      </Link>
    </div>
  );
};

Login.propTypes = {};

export default Login;
