import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 516px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      width: 98%;
    }
  }
`;

export const HeaderNewContact = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: bold;
    }
    img {
      margin-right: 18px;
      transform: rotate(-90deg);
    }
  }
  h1 {
    margin-top: 10px;
    margin-bottom: 32px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  button {
    width: 97%;
  }
`;
