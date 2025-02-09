import React from "react";
import { Alert } from "react-bootstrap";

type ErrorAlertProps = {
  message: string;
  onClose: () => void;
  title?: string;
  className?: string;
};

const ErrorAlert = ({
  title,
  message,
  onClose,
  className,
}: ErrorAlertProps) => {
  return (
    <Alert className={className} variant="danger" onClose={onClose} dismissible>
      <Alert.Heading>{title || "Error"}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default ErrorAlert;
