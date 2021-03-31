import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';
import backgroundImg from '../../img/background.png';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: wrap;

  padding-top: ${(props) => props.$vPad};
  padding-bottom: ${(props) => props.$vPad};
  padding-left: ${(props) => props.$hPad};
  padding-right: ${(props) => props.$hPad};

  margin-top: ${(props) => props.$mT};
  margin-bottom: ${(props) => props.$mB};

  ${(props) => {
    if (props.center)
      return `
        justify-content: center;
        align-items: center
      `;
    if (props.end)
      return `
        justify-content: flex-end;
        align-items: flex-end
      `;
    if (props.spaceBetween)
      return `
        justify-content: space-between;
        align-items: center
      `;
  }}
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => props.$img && `url(${backgroundImg})`};
`;

export const FeedHeader = styled(Paper)`
  padding: 2rem;
  width: 100%;
  background-image: ${(props) => props.$img && `url(${backgroundImg})`};
`;

export const GridContainer = styled(Grid)`
  height: 100%;
  max-width: ${(props) => props.$maxWidth};
`;

export const GridImage = styled(Grid)`
  background-image: url(${backgroundImg});
`;

export const StyledPaper = styled(Paper)`
  padding: 1rem;
  max-width: ${(props) => props.$maxWidth};

  ${(props) => {
    if (props.$xs)
      return `
        padding: 2rem
    `;
    if (props.$sm)
      return `
        padding: 3rem
    `;
    if (props.$md)
      return `
        padding: 4rem
    `;
    if (props.$lg)
      return `
        padding: 5rem
    `;
    if (props.$xl)
      return `
        padding: 6rem
    `;
  }};
`;

export const PrimaryColorContainer = styled(Paper)`
  padding: 2rem;
  max-width: ${(props) => props.$maxWidth};
  border-color: ${(props) => props.theme.palette.primary.main};
`;

export const FormContainer = styled.div`
  display: block;
  max-width: 500px;
  padding: 2rem;
`;

export const ProfileBox = styled.div`
  padding-top: ${(props) => props.$vPad};
  padding-bottom: ${(props) => props.$vPad};
  padding-left: ${(props) => props.$hPad};
  padding-right: ${(props) => props.$hPad};

  margin-left: ${(props) => props.$mL};
  margin-right: ${(props) => props.$mR};
`;

export const Divider = styled.div`
  width: 100%;
  height: 3rem;

  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const StyledLikedWrapper = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  height: 1.5rem;
  cursor: pointer;
`;

export const SlimDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background-color: ${(props) => props.theme.palette.grey[600]};
`;
