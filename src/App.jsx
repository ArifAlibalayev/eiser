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
          <Route path="/Details" element={<Details />} />
          <Route path="/Basket" element={<BasketPage />} />
          <Route path="/Basket/:id" element={<BasketPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
