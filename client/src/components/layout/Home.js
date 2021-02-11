import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Link to='/register'>
        <Button variant='outlined' color='primary'>
          Register
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

Home.propTypes = {};

export default Home;
