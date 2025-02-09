import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Film } from "../../types/Film";
import { getFilmById } from "../../services/SwapiService.ts";
import { ErrorState } from "../../types/Errorstate.tsx";
import LoadingSpinner from "../ui/LoadingSpinner.tsx";

type PeopleFilmItemProps = {
  id: string;
  className?: string;
};
const PeopleFilmItem = ({ id, className }: PeopleFilmItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);
  const [film, setFilm] = useState<Film | null>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getFilmById(id)
        .then((data) => setFilm(data))
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
        {!isLoading && !error && film && (
          <>
            <Card.Title className="text-center text-info">
              {film?.title}
            </Card.Title>
            <div className="text-center mt-4">
              <p>Director: {film?.director}</p>
              <p>Producer: {film?.producer}</p>
              <p>Release Date: {film?.release_date}</p>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default PeopleFilmItem;
