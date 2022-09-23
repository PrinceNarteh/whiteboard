import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Room } from "./pages/room";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
