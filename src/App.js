import React from "react";
import photo from "./photo.jpg";

export default () => (
  <div>
    <img src={photo} alt="Mantas Kaveckas" />
    <h1>
      Mantas Kaveckas
      <small>Senior Frontend Engineer</small>
    </h1>
    <a href="mailto:mantas.kaveckas@gmail.com">mantas.kaveckas@gmail.com</a>{" "}
    <span className="separator">|</span>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/mantaskaveckas"
    >
      Linkedin
    </a>{" "}
    <span className="separator">|</span>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/kaveckas"
    >
      @kaveckas
    </a>
  </div>
);
