import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function copyGame(game) {
  const gameCopy = new Chess();
  gameCopy.loadPgn(game.pgn());
  return gameCopy;
}

function ChessBoardPage() {
  const [game, setGame] = useState(new Chess());

  function onPieceDrop({ sourceSquare, targetSquare }) {
    if (!targetSquare) return false;

    const gameCopy = copyGame(game);

    try {
      gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
    } catch {
      return false;
    }

    setGame(gameCopy);
    return true;
  }

  function undoMove() {
    const gameCopy = copyGame(game);
    gameCopy.undo();
    setGame(gameCopy);
  }

  function newGame() {
    setGame(new Chess());
  }

  const history = game.history();

return (
  <section>
    <h2>Chess Board</h2>
    

    <div className="chess-layout">
      {/* Chessboard */}
      <div className="chess-board-container">
        <Chessboard
          options={{
            position: game.fen(),
            onPieceDrop,
          }}
        />
      </div>

      {/* Side panel */}
      <div className="chess-sidebar">
        <div className="chess-controls">
          <button className="boardButton" onClick={undoMove} disabled={history.length === 0}>
            Undo Move
          </button>

          <button className="boardButton" onClick={newGame}>
            Reset Board
          </button>
        </div>

        <h3>Move History</h3>

        <div className="move-history">
          {history.length === 0 ? (
            <p>No moves played yet.</p>
          ) : (
            Array.from(
              { length: Math.ceil(history.length / 2) },
              (_, index) => (
                <p key={index}>
                  <strong>{index + 1}.</strong>{" "}
                  {history[index * 2]}{" "}
                  {history[index * 2 + 1] || ""}
                </p>
              )
            )
          )}
        </div>
      </div>
    </div>
  </section>
);
}

export default ChessBoardPage;