import * as React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Credits from "../components/Credits/Credits";
import NotFound from "../components/NotFound/NotFound";

const NotFoundPage = () => {
  //

  return (
    <Layout>
      <div
        className="layout__page-container"
        style={{ "--accent-color": "#e00763" }}
      >
        <Header />
        <NotFound />
        <Credits />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
