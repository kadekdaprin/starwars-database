import React from "react";
import { Flower1 } from "react-bootstrap-icons";
import { getIdFromUrl } from "../../helper/SwapiHelper.ts";
import { Col, Row } from "react-bootstrap";
import PeopleSpeciesItem from "./PeopleSpeciesItem.tsx";

type PeopleSpeciesProps = {
  speciesList: string[];
  className?: string;
};

const PeopleSpecies = ({ className, speciesList }: PeopleSpeciesProps) => {
  return (
    <div className={className}>
      <h3 className="mt-4 text-secondary d-flex align-items-center">
        <span className="me-2 mb-1">
          <Flower1 className="text-secondary" />
        </span>
        <span>Species</span>
      </h3>
      <div className="mt-2">
        <Row xs={1} sm={2} md={3} lg={4}>
          {speciesList.map((species, i) => (
            <Col className="p-2">
              <PeopleSpeciesItem key={i} id={getIdFromUrl(species)} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PeopleSpecies;
