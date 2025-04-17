import React from "react";

export default function DisplayData({ firstName, lastName, isInvalidNumber }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      {isInvalidNumber ? (
        <span style={{ color: "red" }}>{isInvalidNumber}</span>
      ) : null}
    </div>
  );
}
