const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
// import React, { useState } from "react";

// const initialGameBoard = Array(3).fill(Array(3).fill(null));

// export default function GameBoard() {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   const handleSelectSquare = (rowIndex, colIndex) => {
//     setGameBoard((prevGameBoard) =>
//       prevGameBoard.map((row, rIdx) =>
//         row.map((col, cIdx) =>
//           rIdx === rowIndex && cIdx === colIndex ? "X" : col
//         )
//       )
//     );
//   };

//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
//                   {playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }
