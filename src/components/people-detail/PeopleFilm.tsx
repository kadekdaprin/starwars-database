import React from "react";
import { CameraReels } from "react-bootstrap-icons";
import PeopleFilmItem from "./PeopleFilmItem.tsx";
import { getIdFromUrl } from "../../helper/SwapiHelper.ts";
import { Col, Row } from "react-bootstrap";

type PeopleFilmProps = {
  films: string[];
  className?: string;
};

const PeopleFilm = ({ className, films }: PeopleFilmProps) => {
  return (
    <div className={className}>
      <h3 className="mt-4 text-secondary d-flex align-items-center">
        <span className="me-2 mb-1">
          <CameraReels className="text-secondary" />
        </span>
        <span>Film</span>
      </h3>
      <div className="mt-2">
        <Row xs={1} sm={2} md={3} lg={4}>
          {films.map((film, i) => (
            <Col key={i} className="p-2">
              <PeopleFilmItem id={getIdFromUrl(film)} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PeopleFilm;
