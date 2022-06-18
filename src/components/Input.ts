import styled from 'styled-components';

export default styled.input`
  margin-top: 16px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSeundary};
  border: none;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secundary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecunday};
  }
`;
