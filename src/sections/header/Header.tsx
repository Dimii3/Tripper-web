import React from "react";

export default function Header() {
  return (
    <header className="header container">
      <div className="header-content">
        <h1 className="header-content__heading heading-1">
          Discover the wildness
          <br />
          of nature
        </h1>
        <p className="header-content__text paragraphs-primary">
          Get adventurous in the most unknown areas on earth, jungle, forests,
          caves, mountains.
        </p>
      </div>
      <div className="header-image">
        <img src="/header-img.png" alt="" className="header-image__img" />
      </div>
    </header>
  );
}
