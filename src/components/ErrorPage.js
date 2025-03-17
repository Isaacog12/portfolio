import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css"; // Ensure this CSS file is created and linked

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Page Not Found</h2>
      <p className="error-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="go-home-button">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
