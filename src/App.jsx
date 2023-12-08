import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Details from "./pages/Details";
import MainLayout from "./layout/Mainlayout";
import BasketPage from "./pages/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Basket" element={<BasketPage />} />

        </Route>np
      </Routes>
    </>
  );
}

export default App;
