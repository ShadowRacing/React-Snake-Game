import React from "react";

const GameBoard = () => {
  const boardStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  };

  const headerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "8px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const gameAreaStyle = {
    width: "600px",
    height: "600px",
    backgroundColor: "#1a1a1a",
    border: "2px solid #333",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const sidebarStyle = {
    width: "200px",
    backgroundColor: "#242424",
    borderRadius: "8px",
    padding: "15px",
  };

  const mainContainerStyle = {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={boardStyle}>
      <div style={headerStyle}>
        <button
          style={{ ...buttonStyle, backgroundColor: "#242424", color: "white" }}
        >
          Classic Snake
        </button>
        <div>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#4a4a4a",
              color: "white",
              marginRight: "10px",
            }}
          >
            New Game
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#4a4a4a",
              color: "white",
              marginRight: "10px",
            }}
          >
            Pause
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
              color: "white",
            }}
          >
            Exit
          </button>
        </div>
      </div>

      <div style={mainContainerStyle}>
        <div style={sidebarStyle}>
          <h3 style={{ color: "white", marginTop: 0 }}>Game Stats</h3>
          <div style={{ color: "#aaa" }}>
            <p>Current Stats ▸</p>
            <p>High Scores ▸</p>
          </div>
        </div>

        <div style={gameAreaStyle}>
          <p>Press 'New Game' to start</p>
        </div>

        <div style={sidebarStyle}>
          <h3 style={{ color: "white", marginTop: 0 }}>Game Info</h3>
          <div style={{ color: "#aaa" }}>
            <p>Food Types ▸</p>
            <p>Controls ▸</p>
            <p>Statistics ▸</p>
            <p>Achievements ▸</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
