import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Create, Items } from "./Pages/";
import { Header } from "./Components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="container-fluid">
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Navigate replace to="/Items" />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Items" element={<Items />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
