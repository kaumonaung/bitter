import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { MdMenu } from 'react-icons/md';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { Typography, Button } from '@material-ui/core';
import Logo from '../../img/logo.svg';
import styled from 'styled-components';
import { StyledLink as Link } from '../styled';

// Global State
import { useAuthState } from '../../context';

const StyledLogo = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 1rem;
`;

const Navbar = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <Link to='/' style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex' }}>
            <StyledLogo src={Logo} alt='Bitter Logo' />
            <Typography variant='h6' color='primary'>
              Bitter
            </Typography>
          </div>
        </Link>

        <Button>Posts</Button>

        {isAuthenticated && (
          <IconButton edge='end' color='inherit'>
            <IoPersonCircleSharp />
          </IconButton>
        )}

        <StyledIconButton edge='start' color='inherit' aria-label='menu'>
          <MdMenu />
        </StyledIconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
