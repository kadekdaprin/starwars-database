import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Starship } from "../../types/Starship";
import { getVehicleById } from "../../services/SwapiService.ts";
import { ErrorState } from "../../types/Errorstate.tsx";
import LoadingSpinner from "../ui/LoadingSpinner.tsx";

type PeopleStarshipItemProps = {
  id: string;
  className?: string;
};
const PeopleStarshipItem = ({ id, className }: PeopleStarshipItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [vehicle, setStarship] = useState<Starship | null>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getVehicleById(id)
        .then((data) => setStarship(data))
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
        {!isLoading && !error && vehicle && (
          <>
            <Card.Title className="text-center text-info">
              {vehicle?.name}
            </Card.Title>
            <div className="text-center mt-4">
              <p>Model: {vehicle?.model}</p>
              <p>Manufacturer: {vehicle?.manufacturer}</p>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default PeopleStarshipItem;
