import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';
import backgroundImg from '../../img/background.png';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: wrap;
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
  }}
`;

export const MainContainer = styled.div`
  height: 92vh;
  width: 100%;
  background-image: ${(props) => props.$img && `url(${backgroundImg})`};
`;

export const GridContainer = styled(Grid)`
  height: 100%;
`;

export const GridItemImg = styled(Grid)`
  background-image: url(${backgroundImg});
`;

export const StyledPaper = styled(Paper)`
  padding: 1rem;
  max-width: ${(props) => props.maxWidth};

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
