import { CSSProperties } from "react";

const GameBoard = () => {
  const boardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    height: "100vh",
  };

  const upperHeaderStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "8px",
    height: "55px",
    alignItems: "center", // Center items vertically
  };

  const gameModeStyle = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px 16px",
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

  const sidebarStyle: CSSProperties = {
    width: "200px",
    backgroundColor: "#242424",
    borderRadius: "8px",
    padding: "15px",
    height: "600px",
    overflowY: "auto",
  };

  const bottomHeaderStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#333",
    borderRadius: "8px",
    height: "150px",
    marginTop: "auto",
    alignItems: "center",
  };

  const statBoxStyle = {
    backgroundColor: "#242424",
    padding: "8px 16px",
    borderRadius: "4px",
    color: "white",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    minWidth: "120px",
  };

  const statLabelStyle = {
    fontSize: "12px",
    color: "red",
    marginBottom: "2px",
  };

  const statValueStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const mainContainerStyle = {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    flex: "1",
  };

  return (
    <div style={boardStyle}>
      <div style={upperHeaderStyle}>
        <span style={gameModeStyle}>Classic Snake</span>
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

      <div style={bottomHeaderStyle}>
        <div style={statBoxStyle}>
          <span style={statLabelStyle}>POINTS</span>
          <span style={statValueStyle}>0</span>
        </div>
        <div style={statBoxStyle}>
          <span style={statLabelStyle}>HIGHSCORE</span>
          <span style={statValueStyle}>0</span>
        </div>
        <div style={statBoxStyle}>
          <span style={statLabelStyle}>TIME</span>
          <span style={statValueStyle}>00:00</span>
        </div>
        <div style={statBoxStyle}>
          <span style={statLabelStyle}>BEST TIME</span>
          <span style={statValueStyle}>00:00</span>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
