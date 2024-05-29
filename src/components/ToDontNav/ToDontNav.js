import React from "react";
import ctaImg from "../../../static/img/Free_Book_Mockup_no_shadow.png";

import { Link } from "gatsby";

export default function ToDontNav() {
  return (
    <section className="layout__tdn-container">
      <div className="layout__tdn">
        <div className="tdn__section__left">
          <h1 className="tdn__title">IF YOU DON’T</h1>
        </div>
        <div className="tdn__section__right">
          <img className="tdn__img" src={ctaImg} alt="book" />
        </div>
      </div>
      <div className="tdn__nav">
        <Link
          className="tdn__nav__item"
          to="/ifyoudont/about"
          activeClassName="tdn__nav__item-active"
        >
          <p className="tdn__nav__item-text">THE BOOK</p>
        </Link>
        <Link
          className="tdn__nav__item"
          to="/ifyoudont/sources"
          activeClassName="tdn__nav__item-active"
        >
          <p className="tdn__nav__item-text">THE SOURCES</p>
        </Link>
        <Link
          className="tdn__nav__item"
          to="/ifyoudont/additions"
          activeClassName="tdn__nav__item-active"
        >
          <p className="tdn__nav__item-text">THE ADDITIONS</p>
        </Link>
      </div>
    </section>
  );
}
