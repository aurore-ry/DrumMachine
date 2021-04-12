import "./App.scss";
import { sounds, SoundsContext } from "./SoundsContext";
import { DrumMachine } from "./components/DrumMachine";

function App() {
  return (
    <SoundsContext.Provider value={sounds}>
      <DrumMachine />
    </SoundsContext.Provider>
  );
}

export default App;
