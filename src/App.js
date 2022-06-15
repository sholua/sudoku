import "./styles/main.scss";

function App() {
  return (
    <div className="game-layout">
      <div className="sudoku u-text-center">
        <div className="sudoku-row">
          <input className="cell cell__mute" type="text" value={1} readOnly />
          <input className="cell" type="text" value={""} />
          <input
            className="cell cell__horizontal-verge"
            type="text"
            value={3}
          />
          <input className="cell cell__mute" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell cell__mute" value={7} />
          <input className="cell cell__error" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <div className="sudoku-row">
          <input className="cell" value={1} />
          <input className="cell cell__mute" value={2} />
          <input className="cell cell__horizontal-verge" value={3} />
          <input className="cell" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell cell__mute" value={7} />
          <input className="cell" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <div className="sudoku-row">
          <input className="cell" value={1} />
          <input className="cell" value={2} />
          <input className="cell cell__horizontal-verge" value={3} />
          <input className="cell" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell" value={7} />
          <input className="cell cell__mute" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <div className="sudoku-row">
          <input className="cell cell__mute" type="text" value={1} readOnly />
          <input className="cell" type="text" value={""} />
          <input
            className="cell cell__horizontal-verge"
            type="text"
            value={3}
          />
          <input className="cell cell__mute" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell cell__mute" value={7} />
          <input className="cell" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <div className="sudoku-row">
          <input className="cell" value={1} />
          <input className="cell cell__mute" value={2} />
          <input className="cell cell__horizontal-verge" value={3} />
          <input className="cell" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell cell__mute" value={7} />
          <input className="cell" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <div className="sudoku-row">
          <input className="cell" value={1} />
          <input className="cell" value={2} />
          <input className="cell cell__horizontal-verge" value={3} />
          <input className="cell" value={4} />
          <input className="cell" value={5} />
          <input className="cell cell__horizontal-verge" value={6} />
          <input className="cell" value={7} />
          <input className="cell cell__mute" value={8} />
          <input className="cell cell__mute" value={9} />
        </div>
        <button className="btn u-margin-top-medium u-margin-bottom-medium">
          Create New Puzzle
        </button>
      </div>
    </div>
  );
}

export default App;
