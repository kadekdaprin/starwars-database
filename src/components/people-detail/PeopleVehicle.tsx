import React from "react";
import { CarFront } from "react-bootstrap-icons";
import { getIdFromUrl } from "../../helper/SwapiHelper.ts";
import { Col, Row } from "react-bootstrap";
import PeopleVehicleItem from "./PeopleVehicleItem.tsx";

type PeopleVehicleProps = {
  vehicles: string[];
  className?: string;
};

const PeopleVehicle = ({ className, vehicles }: PeopleVehicleProps) => {
  return (
    <div className={className}>
      <h3 className="mt-4 text-secondary d-flex align-items-center">
        <span className="me-2 mb-1">
          <CarFront className="text-secondary" />
        </span>
        <span>Vehicle</span>
      </h3>
      <div className="mt-2">
        <Row xs={1} sm={2} md={3} lg={4}>
          {vehicles.map((vehichle, i) => (
            <Col className="p-2">
              <PeopleVehicleItem key={i} id={getIdFromUrl(vehichle)} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PeopleVehicle;
