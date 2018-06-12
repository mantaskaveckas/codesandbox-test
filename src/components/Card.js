import React from "react";

export default ({
  photo,
  name,
  position,
  mail,
  linkedin,
  instagram,
  twitter,
  twitterName
}) => (
  <div>
    <img src={photo} alt={name} />
    <h1>
      {name}
      <small>{position}</small>
    </h1>
    <a href={`mailto:${mail}`}>
      <i className="far fa-envelope" /> {mail}
    </a>
    <span className="separator">|</span>
    <a target="_blank" rel="noopener noreferrer" href={twitter}>
      <i className="fab fa-twitter" /> {twitterName}
    </a>
    <span className="separator">|</span>
    <a target="_blank" rel="noopener noreferrer" href={linkedin}>
      <i className="fab fa-linkedin-in" />
    </a>
    <span className="separator">|</span>
    <a target="_blank" rel="noopener noreferrer" href={instagram}>
      <i className="fab fa-instagram" />
    </a>
  </div>
);
