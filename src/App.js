import "./App.css";
import OtpScreen from "./Components/OtpScreen";
import MainSceen from "./Components/MainSceen";
import MasterClass from "./Components/MasterClass";
import ScreenContainer from "./Components/ScreenContainer";
import MasterclassThanks from "./Components/MasterclassThanks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div className="App">
      {/* <MainSceen />
       */}
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainSceen />} />
          <Route path="/TrendingStory" index element={<StoryScreen/>} />
          <Route path="/MasterClass" index element={<MasterClass />} />
          <Route path="/MasterclassThanks" index element={<MasterclassThanks />} />
          <Route path="/OtpScreen" index element={<OtpScreen />} />
          <Route path="/ScreenContainer" index element={<ScreenContainer />} />
          <Route path = "/Introduction" index element = {<Introduction/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
