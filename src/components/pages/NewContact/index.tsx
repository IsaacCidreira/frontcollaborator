import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonContainer, Container, Form, HeaderNewContact } from './style';
import arrow from '../../../components/assets/images/arrow.svg';
import Input from '../../Input';
import Button from '../../Button';
import { FormsGroup } from '../../FormsGroup';
import formatPhone from '../../utils/formatPhone';
import CollaboratorService from '../../services/CollaboratorService';
import { useErros } from '../../hooks/useError';
const NewContact = () => {
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [url, setUrl] = useState('');

  const { setError, removeError, getErrorMessage, errors } = useErros();
  const isFormValid = name && cargo && telefone && errors.length === 0;
  let navigate = useNavigate();

  function HandleChangeTelefone({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(formatPhone(target.value));

    if (!target.value) {
      setError({ field: 'telefone', message: 'Telefone é Obrigatório' });
    } else {
      removeError('telefone');
    }
  }

  function HandleChangeCargo({ target }: React.ChangeEvent<HTMLInputElement>) {
    setCargo(target.value);
    if (!target.value) {
      setError({ field: 'cargo', message: 'Cargo é Obrigatório' });
    } else {
      removeError('cargo');
    }
  }

  function HandleChangeName({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);
    if (!target.value) {
      setError({ field: 'name', message: 'Nome é Obrigatório' });
    } else {
      removeError('name');
    }
  }

  function HandleChangeUrl({ target }: React.ChangeEvent<HTMLInputElement>) {
    setUrl(target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      CollaboratorService.postCollaborator(name, cargo, telefone, url);
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/');
    }
  }
  return (
    <Container>
      <HeaderNewContact>
        <Link to="/">
          <img src={arrow} alt="Voltar" />
          <span>Voltar</span>
        </Link>
        <h1>Novo Colaborador</h1>
      </HeaderNewContact>
      <Form onSubmit={handleSubmit}>
        <FormsGroup error={getErrorMessage('name')}>
          <Input placeholder="Nome" value={name} onChange={HandleChangeName} />
        </FormsGroup>
        <FormsGroup error={getErrorMessage('cargo')}>
          <Input
            placeholder="Cargo"
            value={cargo}
            onChange={HandleChangeCargo}
          />
        </FormsGroup>
        <FormsGroup error={getErrorMessage('telefone')}>
          <Input
            placeholder="Telefone"
            value={telefone}
            onChange={HandleChangeTelefone}
            maxLength={15}
          />
        </FormsGroup>
        <FormsGroup>
          <Input
            placeholder="Cole a url da foto do colaborador"
            value={url}
            onChange={HandleChangeUrl}
          />
        </FormsGroup>
        <ButtonContainer>
          <Button disabled={!isFormValid} type="submit">
            Criar novo colaborador
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default NewContact;
