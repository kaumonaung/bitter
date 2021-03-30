import styled from 'styled-components';

const margin = '1rem';

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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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
  color: ${props.theme.palette.primary.main}
  `;
    if (props.secondary)
      return `
  color: ${props.theme.palette.grey[700]}
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

export const ProfileName = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.2rem 0;

  color: ${(props) => props.theme.palette.primary.main};
`;

export const ProfileHeading = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;

  margin-left: ${(props) => props.$mL};
  margin-right: ${(props) => props.$mR};
`;

export const PostItemAuthor = styled.h4`
  font-size: ${(props) => props.$size};
  font-weight: 700;
  margin: 0;
  cursor: pointer;

  color: ${(props) => props.theme.palette.primary.main};

  margin-left: ${(props) => props.$mL};
  margin-right: ${(props) => props.$mR};
`;

export const Text = styled.p`
  font-size: ${(props) => props.$size};
  margin: 0;

  margin-left: ${(props) => props.$mL};
  margin-right: ${(props) => props.$mR};
  margin-top: ${(props) => props.$mT};
  margin-bottom: ${(props) => props.$mB};

  ${(props) => {
    if (props.grey)
      return `
  color: ${props.theme.palette.grey[500]}
  `;
  }}
`;
