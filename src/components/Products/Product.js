import React from "react";
import slugify from "slugify";

import ProductImage from "./Product-image.js";
import Button from "../Button.js";

const Product = ({
  product: {
    node: { html, frontmatter },
  },
  diapositive,
}) => {
  console.log("product", frontmatter.id);
  return (
    <div
      id={slugify(frontmatter.checkbox.title)}
      key={frontmatter.id}
      data-layout={frontmatter.layout}
      data-diapositive={diapositive}
      className="layout__product-container"
      style={{ "--accent-color": frontmatter.accentColor }}
    >
      <ProductImage
        diapositive={diapositive}
        images={frontmatter.images}
        layout={frontmatter.layout}
      />

      <div className="layout__product">
        <div className="product__content">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          {frontmatter.buttons.map((btn, key) => {
            return (
              <Button
                text={btn.text}
                link={btn.link}
                accentColor={frontmatter.accentColor}
                key={key}
                position={key}
                diapositive={diapositive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
