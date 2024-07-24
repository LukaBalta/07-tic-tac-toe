import React from "react";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleKeyPress(e) {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={("enter", handleKeyPress)}
      />
    );
  }
  console.log(playerName);
  console.log(isEditing);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
