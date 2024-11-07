import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./assets/layouts/HomeLayout";
import FullwidthLayout from "./assets/layouts/FullwidthLayout";
import ContactLayout from "./assets/layouts/ContactLayout";
import NoPageLayout from "./assets/layouts/NoPageLayout";
import Homepage from "./assets/pages/Homepage";
import Aboutpage from "./assets/pages/Aboutpage";
import Contactpage from "./assets/pages/Contactpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route path="/about" element={<FullwidthLayout />}>
            <Route index element={<Aboutpage />} />
          </Route>
          <Route path="/contact" element={<ContactLayout />}>
            <Route index element={<Contactpage />} />
          </Route>
          <Route path="/*" element={<NoPageLayout />}>
            <Route index element={<Aboutpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
