import styled from 'styled-components';

const margin = '1rem';
const primary = '#E63850';
const secondary = '#616161';

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 2.9rem;
  }

  @media (min-width: 960px) {
    font-size: 3.2rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 960px) {
    font-size: 2.7rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 960px) {
    font-size: 2.2rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 1.7rem;
  }

  @media (min-width: 960px) {
    font-size: 1.9rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const H5 = styled.h5`
  font-size: 1.4rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const H6 = styled.h6`
  font-size: 1.25rem;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 1.3rem;
  }

  ${(props) => {
    if (props.primary)
      return `
  color: ${primary}
  `;
    if (props.secondary)
      return `
  color: ${secondary}
  `;
  }};

  margin-top: ${(props) => (props.$mT ? margin : '0')};
  margin-right: ${(props) => (props.$mR ? margin : '0')};
  margin-bottom: ${(props) => (props.$mB ? margin : '0')};
  margin-left: ${(props) => (props.$mL ? margin : '0')};
`;

export const LinkText = styled.p`
  ${({ theme }) => `
color: ${theme.palette.text.primary};

&:hover {
  color: ${theme.palette.primary.main};
}
`}
`;
