import { ReactNode } from 'react';
import { Container } from './style';

interface IFormsGroup {
  children: ReactNode;
  error?: string;
}

export const FormsGroup = ({ children, error }: IFormsGroup) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};
