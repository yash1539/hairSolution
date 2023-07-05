import "./App.scss";
import OtpScreen from "./Components/OtpScreen";
import MainScreen from "./Components/MainScreen";
import IntroScreen from "./pages/IntroScreen";
import MasterClass from "./Components/MasterClass";
import ScreenContainer from "./Components/ScreenContainer";
import MasterclassThanks from "./Components/MasterclassThanks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen";
import HomePage from "./Components/HomePage";
function App() {
  return (
    <div className="App">
      {/* <MainSceen />
       */}
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainScreen />} />
          <Route path="/TrendingStory" index element={<StoryScreen/>} />
          <Route path="/MasterClass" index element={<MasterClass />} />
          <Route path="/MasterclassThanks" index element={<MasterclassThanks />} />
          <Route path="/OtpScreen" index element={<OtpScreen />} />
          <Route path="/ScreenContainer" index element={<ScreenContainer />} />
          <Route path="/HomePage" index element={<HomePage />} />
          <Route path = "/MainScreen" index element = {<MainScreen/>}/>
          <Route path = "/userInfoPage" index element = {<IntroScreen/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
