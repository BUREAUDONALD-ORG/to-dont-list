import React from "react";
import ctaImg from "../../../static/img/Free_Book_Mockup_no_shadow.png";

import { Link } from "gatsby";

export default function IYDNav() {
  return (
    <section
      className="layout__iyd-container"
      style={{ "--selection-color": "var(--white)" }}
    >
      <div className="layout__iyd">
        <div className="iyd__section__left">
          <h1 className="iyd__title">IF YOU DON’T</h1>
        </div>
        <div className="iyd__section__right">
          <img className="iyd__img" src={ctaImg} alt="book" />
        </div>
      </div>
      <div className="iyd__nav">
        <Link
          className="iyd__nav__item"
          to="/ifyoudont/about"
          activeClassName="iyd__nav__item-active"
        >
          <p className="iyd__nav__item-text">THE BOOK</p>
        </Link>
        <Link
          className="iyd__nav__item"
          to="/ifyoudont/sources"
          activeClassName="iyd__nav__item-active"
        >
          <p className="iyd__nav__item-text">THE SOURCES</p>
        </Link>
        <Link
          className="iyd__nav__item"
          to="/ifyoudont/additions"
          activeClassName="iyd__nav__item-active"
        >
          <p className="iyd__nav__item-text">THE ADDITIONS</p>
        </Link>
      </div>
    </section>
  );
}
