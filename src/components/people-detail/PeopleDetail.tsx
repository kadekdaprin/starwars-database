import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAlert from "../ui/ErrorAlert.tsx";
import { ErrorState } from "../../types/Errorstate.ts";
import {
  getHomeWorldById,
  getPeopleById,
} from "../../services/SwapiService.ts";
import { People } from "../../types/People.ts";
import LoadingSpinner from "../ui/LoadingSpinner.tsx";
import { Row } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { HomeWorld } from "../../types/HomeWorld.ts";
import { getIdFromUrl } from "../../helper/SwapiHelper.ts";
import PeopleFilm from "./PeopleFilm.tsx";
import PeopleSpecies from "./PeopleSpecies.tsx";
import PeopleStarship from "./PeopleStarship.tsx";
import PeopleVehicle from "./PeopleVehicle.tsx";

const PeopleDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [people, setPeople] = useState<People | null>(null);
  const [homeWorld, setHomeWorld] = useState<HomeWorld | null>(null);

  const fetchPeople = async (id: string) => {
    setIsLoading(true);
    return getPeopleById(id)
      .then((data) => {
        setPeople(data);
        const homeWorldId = getIdFromUrl(data.homeworld);
        return getHomeWorldById(homeWorldId);
      })
      .then((data) => {
        setHomeWorld(data);
      })
      .catch((error) => {
        setError({
          title: "Error",
          message: error.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      fetchPeople(id);
    }
  }, [id]);

  return (
    <div className="people-detail">
      {error && (
        <ErrorAlert
          className="mt-4 mb-4"
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && people && (
        <div>
          <h1 className="text-info">{people?.name}</h1>
          <hr />
          <Row>
            <div className="col">
              <h3 className="mt-4 text-secondary d-flex align-items-center">
                <span className="me-2 mb-1">
                  <PersonCircle className="text-secondary" />
                </span>
                <span>Profile</span>
              </h3>
              <Row className="mt-3">
                <label className="col-3 text-secondary">Height</label>
                <span className="col-9">: {people.height}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Mass</label>
                <span className="col-9">: {people.mass}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Hair color</label>
                <span className="col-9">: {people.hair_color}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Skin color</label>
                <span className="col-9">: {people.skin_color}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Eye color</label>
                <span className="col-9">: {people.eye_color}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Birth Year</label>
                <span className="col-9">: {people.birth_year}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Gender</label>
                <span className="col-9">: {people.gender}</span>
              </Row>
              <Row className="mt-2">
                <label className="col-3 text-secondary">Home World</label>
                <span className="col-9">: {homeWorld?.name}</span>
              </Row>
            </div>
          </Row>
          <PeopleFilm films={people.films} />
          <PeopleSpecies speciesList={people.species} />
          <PeopleStarship starships={people.starships} />
          <PeopleVehicle vehicles={people.vehicles} />
        </div>
      )}
    </div>
  );
};

export default PeopleDetail;
