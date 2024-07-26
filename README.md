## Installation

To run this project locally, ensure you have Node.js and npm installed. Then, follow these steps:

### 1. Clone the repository:

<br>
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe

### 2. Install dependencies:

<br>
npm install

### 3. Start the development server:

<br>
npm start

Your application should now be running on http://localhost:3000.
<br><br>
<br><br>

## Usage

1. Open your browser and navigate to http://localhost:5173.
2. Enter player names (optional).
3. Click on any cell within the grid to make a move.
4. Play until one player wins or the game results in a draw.
5. Restart the game by clicking the "Restart" button once the game concludes.
   <br><br>
   <br><br>

## Components

#### 1. App Component: The main container for the game. It manages the game state, including player turns, the game board, and the winner determination logic.

```jsx
<App />
```

#### 2. Player Component: Handles displaying and updating player information such as names and active status.

```jsx
<Player
  initialName={PLAYERS.X}
  symbol="X"
  isActive={activePlayer === "X"}
  onChangeName={handlePlayerNameChange}
/>
```

#### 3. GameBoard Component: Renders the 3x3 grid of the Tic Tac Toe board. It accepts props for handling square selection and displaying the active player's symbol.

```jsx
<GameBoard
  onSelectSquare={handleSelectSquare}
  activePlayerSymbol={activePlayer}
  board={gameBoard}
/>
```

#### 4. GameOver Component: Displayed when the game ends, showing either the winner or indicating a draw, with an option to restart the game.

```jsx
<GameOver winner={winner} onRestart={handleRestart} />
```

#### 5. Log Component: Keeps a record of all moves made during the game, displaying them in reverse order.

```jsx
<Log turns={gameTurns} />
```

<br><br>

## Game Logic

The game logic revolves around a few key functions:

- deriveActivePlayer: Determines the current player based on the number of moves made.

```jsx
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
```

- deriveGameBoard: Updates the game board state based on player turns.

```jsx
function deriveGameBoard(turns) {
  const board = Array(9).fill(null);
  turns.forEach(({ index, player }) => {
    board[index] = player;
  });
  return board;
}
```

<br><br>

## Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please submit a pull request or open an issue. Make sure to follow the coding style and include tests for any new functionality.

<br><br>

## License

This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.
