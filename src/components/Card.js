import React from "react";

export default ({
  photo,
  name,
  position,
  mail,
  linkedin,
  twitter,
  twitterName
}) => (
  <div>
    <img src={photo} alt={name} />
    <h1>
      Mantas Kaveckas
      <small>{position}</small>
    </h1>
    <a href={`mailto:${mail}`}>{mail}</a> <span className="separator">|</span>{" "}
    <a target="_blank" rel="noopener noreferrer" href={linkedin}>
      Linkedin
    </a>{" "}
    <span className="separator">|</span>{" "}
    <a target="_blank" rel="noopener noreferrer" href={twitter}>
      {twitterName}
    </a>
  </div>
);
