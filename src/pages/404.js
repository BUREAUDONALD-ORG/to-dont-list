import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Credits from "../components/Credits/Credits";

const NotFoundPage = () => {
  //

  return (
    <Layout>
      <div
        className="layout__page-container"
        style={{ "--accent-color": "#e00763" }}
      >
        <Header />

        <div className="layout__credits-container">
          <div className="layout__credits">
            <h1 className="credits__title">
              Oops, we couldn’t find what you were looking for!{" "}
            </h1>
            <p>
              <Link to="/" className="credits__link">
                Go back
              </Link>
            </p>
            <div className="credits__text">
              {process.env.NODE_ENV === "development" ? (
                <>
                  <br />
                  Try creating a page in <code>src/pages/</code>.
                  <br />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <Credits />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
