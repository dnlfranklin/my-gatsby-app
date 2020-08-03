import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
`;

export const Content = styled.div.attrs({
  className: 'card'
})`
  padding: 1rem;
`;