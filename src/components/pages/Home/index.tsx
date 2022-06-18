import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../ModalEditCollaborator';
import CollaboratorService from '../../services/CollaboratorService';
import {
  Card,
  CardContainer,
  Container,
  InfosUser,
  InputSearchContainer,
  NewContactContainer,
  SearchNotFoundContainer,
  UserImage,
} from './style';
interface Collaborator {
  id: string;
  name: string;
  url: string;
  cargo: string;
  telefone: string;
}

const Home = () => {
  const [collaborator, setCollaborator] = useState([]);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const filterCollaborator = useMemo(() => {
    return collaborator.filter((collaborator: Collaborator) =>
      collaborator.name.toLocaleLowerCase().includes(search.toLowerCase()),
    );
  }, [collaborator, search]);

  const loadCollaborator = useCallback(async () => {
    try {
      const collaboratorList = await CollaboratorService.listCollaborator();
      setCollaborator(collaboratorList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadCollaborator();
  }, [loadCollaborator]);

  function handleChangeSearch({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(target.value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          value={search}
          type="text"
          placeholder="Pequise pelo nome..."
          onChange={handleChangeSearch}
        />
      </InputSearchContainer>
      <NewContactContainer>
        <p>
          {filterCollaborator.length === 1
            ? `${filterCollaborator.length} Contato`
            : `${filterCollaborator.length} Contatos`}
        </p>
        <Link to="/newcontact">
          <button>Novo Contato</button>
        </Link>
      </NewContactContainer>
      <hr />

      {collaborator.length > 0 && filterCollaborator.length < 1 && (
        <SearchNotFoundContainer>
          <span>
            Nenhum resultado foi encontrado para <strong>{search}</strong>
          </span>
        </SearchNotFoundContainer>
      )}

      {filterCollaborator.length > 0 && (
        <CardContainer>
          <Modal id={id} setModal={setModal} modal={modal} />
          {filterCollaborator.map((collaborator: Collaborator) => (
            <React.Fragment key={collaborator.id}>
              <Card
                onClick={() => {
                  setModal(true);
                  setId(collaborator.id);
                }}
                key={collaborator.id}
              >
                <UserImage>
                  <img src={collaborator.url} alt="" />
                </UserImage>
                <InfosUser>
                  <p>Nome: {collaborator.name}</p>
                  <p>Cargo: {collaborator.cargo}</p>
                  <p>
                    Telefone:{' '}
                    {collaborator.telefone
                      .replace(/\D/g, '')
                      .replace(/^(\d{2})\B/, '($1) ')
                      .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3')}
                  </p>
                </InfosUser>
              </Card>
            </React.Fragment>
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default Home;
