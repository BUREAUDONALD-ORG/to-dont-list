import React from "react";
import Layout from "../components/Layout";

import Header from "../components/Header/Header.js";

import ToDontNav from "../components/ToDontNav/ToDontNav.js";
import Credits from "../components/Credits/Credits.js";
import Social from "../components/Social/Social.js";

export default class ifYouDontPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="layout__page-container">
          <Header />
          <ToDontNav />
          <Social />
          <Credits />
        </div>
      </Layout>
    );
  }
}
