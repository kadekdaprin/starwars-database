import React from "react";
import { Card } from "react-bootstrap";
import { People } from "../../types/People";

type PeopleCardProps = {
  people: People;
  onClick?: () => void;
};

const PeopleCard = ({ people, onClick }: PeopleCardProps) => {
  return (
    <Card
      className="col card-button card-people"
      role="button"
      onClick={onClick}
    >
      <Card.Body>
        <Card.Title className="text-center text-info">{people.name}</Card.Title>
        <div className="text-center mt-4">
          <p>Height : {people.height}</p>
          <p>Mass : {people.mass}</p>
          <p>Hair color : {people.hair_color}</p>
          <p>Skin color : {people.skin_color}</p>
          <p>Eye color : {people.eye_color}</p>
          <p>Birth year : {people.birth_year}</p>
          <p>Gender : {people.gender}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PeopleCard;
