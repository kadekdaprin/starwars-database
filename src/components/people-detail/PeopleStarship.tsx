import React from "react";
import { AirplaneEngines } from "react-bootstrap-icons";
import { getIdFromUrl } from "../../helper/SwapiHelper.ts";
import { Col, Row } from "react-bootstrap";
import PeopleStarshipItem from "./PeopleStarshipItem.tsx";

type PeopleStarshipProps = {
  starships: string[];
  className?: string;
};

const PeopleStarship = ({ className, starships }: PeopleStarshipProps) => {
  return (
    <div className={className}>
      <h3 className="mt-4 text-secondary d-flex align-items-center">
        <span className="me-2 mb-1">
          <AirplaneEngines className="text-secondary" />
        </span>
        <span>Starship</span>
      </h3>
      <div className="mt-2">
        <Row xs={1} sm={2} md={3} lg={4}>
          {starships.map((starship, i) => (
            <Col key={i} className="p-2">
              <PeopleStarshipItem id={getIdFromUrl(starship)} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PeopleStarship;
