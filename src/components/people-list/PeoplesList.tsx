import React, { useEffect, useState } from "react";
import { searchPeoples } from "../../services/SwapiService.ts";
import { People } from "../../types/People.tsx";
import { Button, Row } from "react-bootstrap";
import LoadingSpinner from "../ui/LoadingSpinner.tsx";
import ErrorAlert from "../ui/ErrorAlert.tsx";
import PeopleCard from "./PeopleCard.tsx";
import { useNavigate } from "react-router-dom";
import { ErrorState } from "../../types/Errorstate.ts";

const PeopleList = () => {
  var navigate = useNavigate();

  const [peoples, setPeoples] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isShowPrevious, setIsShowPrevious] = useState<boolean>(false);
  const [isShowNext, setIsShowNext] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);

  const fetchPeoples = async (page: number = 1) => {
    setIsLoading(true);
    return searchPeoples(page)
      .then((data) => {
        setPeoples(data.results);
        setIsShowNext(data.next !== null);
        setIsShowPrevious(data.previous !== null);
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

  const nextPageHandler = async () => {
    const targetPage = currentPage + 1;

    await fetchPeoples(targetPage);
    setCurrentPage(targetPage);
  };

  const previousPageHandler = async () => {
    const targetPage = currentPage - 1;

    await fetchPeoples(targetPage);
    setCurrentPage(targetPage);
  };

  const onPeopleCardClickHandler = (people: People) => {
    const id = people.url.split("/").slice(-2)[0];

    navigate(`/people/${id}`);
  };

  useEffect(() => {
    fetchPeoples();
  }, []);

  return (
    <>
      {error && (
        <ErrorAlert
          className="mt-4 mb-4"
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <div>
              {isShowPrevious && (
                <Button
                  className="rounded"
                  aria-label="Previous"
                  onClick={previousPageHandler}
                  style={{ width: "86px" }}
                  variant="outline-info"
                >
                  Previous
                </Button>
              )}
            </div>
            <div className="flex-grow-1 text-center">
              <h1 className="text-secondary">People</h1>
            </div>
            <div>
              {isShowNext && (
                <Button
                  className="rounded"
                  aria-label="Next"
                  onClick={nextPageHandler}
                  style={{ width: "86px" }}
                  variant="outline-info"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
          <Row sm={12} md={3} lg={4} className="g-2 justify-content-center">
            {peoples.map((people, i) => (
              <div key={i}>
                <PeopleCard
                  people={people}
                  onClick={() => onPeopleCardClickHandler(people)}
                />
              </div>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default PeopleList;
