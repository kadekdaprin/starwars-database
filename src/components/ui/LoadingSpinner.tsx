import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="text-center mt-4">
      <Spinner className="me-2" animation="grow" variant="primary" />
      <Spinner className="me-2" animation="grow" variant="info" />
      <Spinner className="me-2" animation="grow" variant="secondary" />
    </div>
  );
};

export default LoadingSpinner;
