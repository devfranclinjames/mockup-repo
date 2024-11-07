import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./assets/layouts/HomeLayout";
import FullwidthLayout from "./assets/layouts/FullwidthLayout";
import ContactLayout from "./assets/layouts/ContactLayout";
import NoPageLayout from "./assets/layouts/NoPageLayout";

import Homepage from "./assets/pages/Homepage";
import Aboutpage from "./assets/pages/Aboutpage";
import Contactpage from "./assets/pages/Contactpage";
import New from "./assets/pages/Newpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/mockup-repo" element={<HomeLayout />}>
            <Route index element={<Homepage />} />
          </Route>
          <Route path="/new" element={<FullwidthLayout />}>
            <Route index element={<New />} />
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
