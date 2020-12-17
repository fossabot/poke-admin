import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { gray, typeScale, pokemonColors } from '../styles';

const DamageContainer = styled.div`
  width: 350px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.neutroTextColor};
`;

const JustType = styled.div`
  background-color: ${(props) => pokemonColors[props.type]};
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  color: ${gray[100]};
  height: 2em;
  font-size: ${typeScale['paragraph']};
  margin: 0 0.5em 0.5em 0;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  width: fit-content;
`;

const P = styled.p`
  font-size: ${typeScale['paragraph']};
`;
const DamageComparison = ({ label, types }) => {
  return (
    <DamageContainer>
      <P>{label}</P>
      <Container className="d-flex flex-wrap">
        {types.map((t) => (
          <JustType type={t}>{t}</JustType>
        ))}
      </Container>
    </DamageContainer>
  );
};

export default DamageComparison;
