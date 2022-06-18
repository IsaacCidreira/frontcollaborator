import styled from 'styled-components';

export default styled.button`
  letter-spacing: 1.3px;
  height: 52px;
  padding: 0 16px;
  border: none;
  background: ${({ theme }) => theme.colors.secundary};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background all 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.secundary};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.textSecunday};
    cursor: default;
  }
`;
