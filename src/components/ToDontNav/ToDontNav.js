import React from "react";
import ctaTitle from "../../../static/img/IYD_Title.svg";
import ctaImg from "../../../static/img/Free_Book_Mockup_no_shadow.png";

import Button from "../Button";

export default function ToDontNav() {
  return (
    <section className="layout__tdn-container">
      <div className="layout__tdn">
        <div className="tdn__section__left">
          <img
            className="tdn__title"
            src={ctaTitle}
            alt="title of book: If you don't"
          />
        </div>
        <div className="tdn__section__right">
          <img className="tdn__img" src={ctaImg} alt="book" />
        </div>
      </div>
      <div className="tdn__nav">
        <Button type="large" text="THE BOOK" link="/ifyoudont/about" />
        <Button type="large" text="THE SOURCES" link="/ifyoudont/sources" />
        <Button type="large" text="THE ADDITIONS" link="/ifyoudont/additions" />
      </div>
    </section>
  );
}
