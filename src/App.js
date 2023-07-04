import "./App.scss";
import OtpScreen from "./Components/OtpScreen";
import MainScreen from "./Components/MainScreen";
import IntoScreen from "./pages/IntoScreen";
import MasterClass from "./Components/MasterClass";
import ScreenContainer from "./Components/ScreenContainer";
import MasterclassThanks from "./Components/MasterclassThanks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen";
import Introduction from "./Components/Introduction"
import HomePage from "./Components/HomePage";
// import FirstScreen from "./Pages/FirstScreen";
function App() {
  return (
    <div className="App">
      {/* <MainSceen />
       */}
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<IntoScreen />} />
          <Route path="/TrendingStory" index element={<StoryScreen/>} />
          <Route path="/MasterClass" index element={<MasterClass />} />
          <Route path="/MasterclassThanks" index element={<MasterclassThanks />} />
          <Route path="/OtpScreen" index element={<OtpScreen />} />
          <Route path="/ScreenContainer" index element={<ScreenContainer />} />
          <Route path="/HomePage" index element={<HomePage />} />
          <Route path = "/Introduction" index element = {<Introduction/>}/>
          <Route path = "/MainScreen" index element = {<MainScreen/>}/>
          {/* <Route path = "/hello" index element = {<MainScreen/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
