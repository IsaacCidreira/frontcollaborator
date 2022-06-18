import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import { FormsGroup } from '../FormsGroup';
import Input from '../Input';
import { Form } from '../pages/NewContact/style';
import CollaboratorService from '../services/CollaboratorService';
import formatPhone from '../utils/formatPhone';
import {
  BodyModal,
  Overlay,
  Close,
  Container,
  EdiCollaborator,
  ButtonContainerRemoveUser,
  ButtonContainer,
} from './style';

interface IModal {
  setModal: (args: boolean) => void;
  modal: boolean;
  id: string;
}

interface Collaborator {
  id: string;
  name: string;
  url: string;
  cargo: string;
  telefone: string;
}
export function Modal({ id, setModal, modal }: IModal): any {
  const [collaborator, setCollaborator] = useState<Collaborator | null>(null);

  const loadOneCollaborator = useCallback(async () => {
    try {
      const listCollaborator = await CollaboratorService.listCollaboratorOne(
        id,
      );
      setCollaborator(listCollaborator);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [url, setUrl] = useState('');

  function HandleChangeTelefone({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(formatPhone(target.value));
  }

  function HandleChangeCargo({ target }: React.ChangeEvent<HTMLInputElement>) {
    setCargo(target.value);
  }

  function HandleChangeName({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);
  }

  function HandleChangeUrl({ target }: React.ChangeEvent<HTMLInputElement>) {
    setUrl(target.value);
  }

  useEffect(() => {
    loadOneCollaborator();
  }, [loadOneCollaborator]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      CollaboratorService.puttCollaborator(id, name, cargo, telefone, url);
    } catch (error) {
      console.log(error);
    } finally {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }

  function handleDelete() {
    try {
      CollaboratorService.deleteCollaboratorOne(id);
    } catch (error) {
      console.log(error);
    } finally {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }

  if (collaborator && modal)
    return (
      <Overlay>
        <Container>
          <div>
            <h1>Editar Collaborador</h1>
            <Close>
              <button
                onClick={() => {
                  setModal(false);
                }}
                type="button"
              >
                <svg width="30" height="30" viewBox="0 0 20 20" fill="##875EFF">
                  <path
                    d="M4.35156 5.19496L9.15406 9.99746L4.35156 14.8L5.20009 15.6485L10.0026 10.846L14.7963 15.6397L15.6449 14.7912L10.8511 9.99746L15.6449 5.20371L14.7963 4.35518L10.0026 9.14894L5.20009 4.34644L4.35156 5.19496Z"
                    fill="#875EFF"
                    stroke="#875EFF"
                  ></path>
                </svg>
              </button>
            </Close>
            <BodyModal>
              <EdiCollaborator key={collaborator.id}>
                <img src={collaborator.url} alt="" />
                <Form onSubmit={handleSubmit}>
                  <FormsGroup>
                    <Input
                      placeholder={
                        collaborator.name ? collaborator.name : 'Nome'
                      }
                      value={name}
                      onChange={HandleChangeName}
                    />
                  </FormsGroup>
                  <FormsGroup>
                    <Input
                      placeholder={
                        collaborator.cargo ? collaborator.cargo : 'Cargo'
                      }
                      value={cargo}
                      onChange={HandleChangeCargo}
                    />
                  </FormsGroup>
                  <FormsGroup>
                    <Input
                      placeholder={
                        collaborator.telefone
                          ? collaborator.telefone
                          : 'Telefone'
                      }
                      value={telefone}
                      onChange={HandleChangeTelefone}
                    />
                  </FormsGroup>
                  <FormsGroup>
                    <Input
                      placeholder={
                        collaborator.url
                          ? collaborator.url
                          : 'Cole aqui o endereço da sua foto'
                      }
                      value={url}
                      onChange={HandleChangeUrl}
                    />
                  </FormsGroup>
                  <ButtonContainer>
                    <Button type="submit">
                      Confirmar edição de {collaborator.name}
                    </Button>
                  </ButtonContainer>

                  <ButtonContainerRemoveUser onClick={handleDelete}>
                    <Button type="submit">Excluir {collaborator.name}</Button>
                  </ButtonContainerRemoveUser>
                </Form>
              </EdiCollaborator>
            </BodyModal>
          </div>
        </Container>
      </Overlay>
    );
  else return null;
}
