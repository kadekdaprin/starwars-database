import React, { use, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Species } from "../../types/Species";
import { getSpeciesById } from "../../services/SwapiService.ts";
import { ErrorState } from "../../types/Errorstate.tsx";
import LoadingSpinner from "../ui/LoadingSpinner.tsx";

type PeopleSpeciesItemProps = {
  id: string;
  className?: string;
};
const PeopleSpeciesItem = ({ id, className }: PeopleSpeciesItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [species, setSpecies] = useState<Species | null>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getSpeciesById(id)
        .then((data) => setSpecies(data))
        .catch((error) => {
          setError({
            title: "Error",
            message: error.message,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <Card className={className}>
      <Card.Body>
        {error && <p className="mt-4" />}
        {isLoading && <LoadingSpinner />}
        {!isLoading && !error && species && (
          <>
            <Card.Title className="text-center text-info">
              {species?.name}
            </Card.Title>
            <div className="text-center mt-4">
              <p>Classification: {species?.classification}</p>
              <p>Designation: {species?.designation}</p>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default PeopleSpeciesItem;
