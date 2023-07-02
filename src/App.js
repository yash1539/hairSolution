import "./App.css";
import MainSceen from "./Components/MainSceen";
import MasterClas_ThankYou from "./Components/MasterClass_ThankYou";

function App() {
  return (
    <div className="App">
      <MasterClas_ThankYou
        content_title="Hair Care Masterclass"
        content="Hello Gurmeher! Warmly welcome to your exclusive masterclass. Get ready for an amazing learning experience!"
        btn_title="STEP INSIDE"
      />
    </div>
  );
}

export default App;
