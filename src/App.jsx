import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import { AboutPage } from "./pages/About/about";
import { MyProvider } from "./utils/contextProvider";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import { AdoptApet } from "./pages/Adoptapet/adoptApet";
import { Error } from "./pages/Error/error";
import { PetDetails } from "./pages/Petdetails/petDetails";
import ChooseToAdopt from "./pages/ChooseToAdopt/chooseToAdopt";
import { OurMission } from "./pages/Ourmission/ourMission";
function App() {
  return (
    <MyProvider>
      <Header />
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt_a_pet" element={<AdoptApet />} />
        <Route path="/adopt_a_pet/:id" element={<PetDetails />} />
        <Route
          path="/adopt_a_pet/choose_to_adopt"
          element={<ChooseToAdopt />}
        />
        <Route path="/about_us/our_mission" element={<OurMission />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}
export default App;
