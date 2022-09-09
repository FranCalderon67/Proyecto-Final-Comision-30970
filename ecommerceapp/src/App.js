import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AgrProducto from "./components/AgrProducto/AgrProducto";
import ItemListContainer from "./components/Productos/ItemListContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={[<AgrProducto />, <ItemListContainer />]} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
