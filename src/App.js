import { app } from "./auth/Auth";
import AddBooks from "./books/AddBooks";
import Getbooks from "./books/GetBooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./components/Layout";
import DeleteBooks from "./books/DeleteBooks";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getbooks" element={<Getbooks />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/deletebooks" element={<DeleteBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
