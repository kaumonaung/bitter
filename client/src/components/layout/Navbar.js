import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { withRouter } from 'react-router-dom';
import { useAuthState, useAuthDispatch, LOGOUT } from '../../context';
import { useGetCurrentProfile } from '../../hooks';
import Logo from '../../img/logo.svg';
import styled from 'styled-components';
import { Flex, StyledButton as Button } from '../styled';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  Typography,
} from '@material-ui/core';

const StyledLogo = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;

const Navbar = (props) => {
  const { isAuthenticated, user } = useAuthState();
  const dispatch = useAuthDispatch();
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Log out');
    dispatch({ type: LOGOUT });
    history.push('/');
  };

  return (
    <AppBar position='sticky' color='default'>
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Button onClick={() => handleMenuClick('/')}>
            <Flex>
              <StyledLogo src={Logo} alt='Bitter Logo' />
              <Typography variant='h6' component='h2' color='primary'>
                Bitter
              </Typography>
            </Flex>
          </Button>
        </div>

        {isMobile ? (
          <div>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleMenu}
            >
              <MdMenu />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick('/feed')}>Feed</MenuItem>
              {isAuthenticated && (
                <MenuItem
                  onClick={() => handleMenuClick(`profile/${user._id}`)}
                >
                  My Profile
                </MenuItem>
              )}
              {isAuthenticated && (
                <MenuItem onClick={() => handleMenuClick('/edit-profile')}>
                  Edit Profile
                </MenuItem>
              )}
              {!isAuthenticated && (
                <MenuItem onClick={() => handleMenuClick('/signup')}>
                  Sign Up
                </MenuItem>
              )}
              {isAuthenticated ? (
                <MenuItem
                  onClick={() => handleLogout()}
                  style={{ color: `${theme.palette.error.main}` }}
                >
                  Log Out
                </MenuItem>
              ) : (
                <MenuItem onClick={() => handleMenuClick('/login')}>
                  Login
                </MenuItem>
              )}
            </Menu>
          </div>
        ) : (
          <>
            <Button $mR onClick={() => handleMenuClick('/feed')}>
              Feed
            </Button>
            {isAuthenticated && (
              <Button
                $mR
                onClick={() => handleMenuClick(`/profile/${user._id}`)}
              >
                My Profile
              </Button>
            )}
            {isAuthenticated && (
              <Button $mR onClick={() => handleMenuClick('/edit-profile')}>
                Edit Profile
              </Button>
            )}
            {!isAuthenticated && (
              <Button $mR onClick={() => handleMenuClick('/signup')}>
                Sign Up
              </Button>
            )}
            {isAuthenticated ? (
              <Button
                onClick={() => handleLogout()}
                style={{ color: `${theme.palette.error.main}` }}
              >
                Log Out
              </Button>
            ) : (
              <Button onClick={() => handleMenuClick('/login')}>Login</Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
