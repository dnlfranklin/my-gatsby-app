import styled from 'styled-components';

export const Container = styled.div`
  background: url('./bg-gatsby.jpg') no-repeat fixed center; 
  background-size: cover;
  flex: 1;
  padding: 2rem;
`;

export const Col = styled.div.attrs({
  className: 'col-sm'
})``;

export const Card = styled.div.attrs({
  className: 'card'
})`
  min-height: 10rem;
  transition: background 0.4s;
  margin-bottom: 1rem;

  &:hover {
    color: #fff;
    background: #663399;
  }
`;