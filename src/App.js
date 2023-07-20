import "./App.scss";
import OtpScreen from "./Components/OtpScreen";
import MainScreen from "./Components/MainScreen";
import IntroScreen from "./pages/IntroScreen";
import MasterClassBooking from "./pages/MasterClassBooking";

import MasterClass2 from "./Components/MasterClass2";
import MasterClass from "./Components/MasterClass";
import ScreenContainer from "./Components/ScreenContainer";
import MasterclassThanks from "./Components/MasterclassThanks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen";
import HomePage from "./Components/HomePage";
import SplashScreen1 from "./pages/SplashScreen1";
import BookingConfirmation from "./pages/BookingConfirmation";
import LossScreen from "./pages/lossScreentext";
import ShowMePage from "./pages/ShowMePage";
import FormatLow from "./pages/FormatLowdown";
import ClaimNow from "./pages/ClaimNow";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" index element={< SplashScreen1/>} />
          <Route path="/BookingPage" index element={<MasterClassBooking />} />
          <Route path="/TrendingStory" index element={<StoryScreen/>} />
          <Route path="/MasterClass" index element={<MasterClass />} />
          <Route path="/MasterClass2" index element={<MasterClass2 />} />
          <Route path="/MasterclassThanks" index element={<MasterclassThanks />} />
          <Route path="/OtpScreen" index element={<OtpScreen />} />
          <Route path="/ScreenContainer" index element={<ScreenContainer />} />
          <Route path="/HomePage" index element={<HomePage />} />
          <Route path = "/MainScreen" index element = {<MainScreen/>}/>
          <Route path = "/userInfoPage" index element = {<IntroScreen/>}/>
          <Route path = "/BookingConfirmation" index element = {<BookingConfirmation/>}/>
          <Route path = "/ShowMePage" index element = {<ShowMePage/>}/>
          <Route path = "/lossScreen" index element = {<LossScreen/>}/>
          <Route path = "/FormatLow" index element = {<FormatLow/>}/>
          <Route path = "/ClaimNow" index element = {<ClaimNow/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
