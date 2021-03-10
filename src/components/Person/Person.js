import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <article className="person" onClick={props.clicked}>
        {props.name.title}. {props.name.first} {props.name.last}
    </article>
  );
};

export default person;
