import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from '../../img/logo.svg';
import {
  Flex,
  MainContainer,
  GridContainer,
  StyledPaper as Paper,
  GridImage,
  StyledButton as Button,
  StyledLink as Link,
  H1,
  H3,
} from '../styled';

const Home = () => {
  return (
    <MainContainer>
      <GridContainer container>
        <GridImage
          container
          item
          xs={12}
          sm={12}
          md={4}
          justify='center'
          alignItems='center'
        >
          <img
            src={Logo}
            style={{ minWidth: '35%', maxWidth: '40%', maxHeight: '70%' }}
            alt='Bitter Logo'
          />
        </GridImage>
        <Grid
          container
          item
          direction='column-reverse'
          justify='center'
          alignItems='center'
          sm={12}
          md={8}
        >
          <Paper elevation={1} $sm>
            <H1 $mB primary>
              Life Is Bitter
            </H1>

            <H3 $mB>Sweeten it up a bit today.</H3>

            <Flex column>
              <Link to='/signup' $mB $mT>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth={true}
                  $mB
                  $medium
                >
                  Sign Up
                </Button>
              </Link>
              <Link to='/login'>
                <Button
                  variant='outlined'
                  color='primary'
                  fullWidth={true}
                  $medium
                >
                  Login
                </Button>
              </Link>
            </Flex>
          </Paper>
        </Grid>
      </GridContainer>
    </MainContainer>
  );
};

export default Home;
