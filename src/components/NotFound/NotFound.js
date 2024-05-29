import React from "react";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <div className="layout__notfound-container">
      <div className="layout__notfound">
        <h1 className="notfound__title">
          Oops, we couldn’t find what you were looking for!{" "}
        </h1>
        <p>
          <Link to="/" className="notfound__link">
            Go back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
