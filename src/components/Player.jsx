import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // IMPORTANT BEST PRACTICE => use arrow function
    // when updating state, otherwise react schedules value change
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  //   let buttonState = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    //   buttonState = "Save";
  }

  console.log(isEditing);
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
