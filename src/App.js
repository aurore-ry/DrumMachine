import "./App.scss";
import { sounds, SoundsContext } from "./SoundsContext";
import { DrumMachine } from "./components/DrumMachine";

function App() {
  return (
    <div className={"container-app"}>
      <SoundsContext.Provider value={sounds}>
        <DrumMachine />
      </SoundsContext.Provider>
    </div>
  );
}

export default App;
