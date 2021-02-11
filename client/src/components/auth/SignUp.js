import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  return (
    <div>
      <Link to='/'>
        <Button variant='contained' color='primary'>
          Home
        </Button>
      </Link>
      <Link to='/login'>
        <Button variant='outlined' color='primary'>
          Login
        </Button>
      </Link>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;