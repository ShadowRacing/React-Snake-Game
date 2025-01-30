import ThemeToggle from "./components/ThemeToggle";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <GameBoard />
    </div>
  );
}

export default App;
