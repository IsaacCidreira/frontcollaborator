import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 516px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  hr {
    margin-top: 16px;
    border: 1px solid ${({ theme }) => theme.colors.backgroundSeundary};
    margin-bottom: 62px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    width: 95%;
    background-color: ${({ theme }) => theme.colors.backgroundSeundary};
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    outline: 0;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.textPrimary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecunday};
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  margin-bottom: 62px;
  cursor: pointer;

  display: flex;
  width: 46%;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSeundary};
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.6);

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    position: relative;
    top: -50%;
    width: 81px;
    height: 81px;
    border-radius: 50%;
  }
`;

export const InfosUser = styled.div`
  position: relative;
  top: -18px;
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    padding-left: 16px;
    margin-bottom: 12px;
  }
`;

export const NewContactContainer = styled.div`
  margin-top: 32px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 24px;
  }
  button {
    width: 237px;
    padding: 10px;
    font-size: 24px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secundary};
    border-radius: 5px;
    border: solid 1px ${({ theme }) => theme.colors.secundary};

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};

      background-color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin: 0 10px;
  margin-top: 32px;
  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  strong {
    color: ${({ theme }) => theme.colors.secundary};
    letter-spacing: 1.2px;
  }
`;
