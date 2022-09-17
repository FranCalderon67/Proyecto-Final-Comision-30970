import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { CartProvider } from './components/Carrito/CartContext'
import Cart from "./components/Carrito/Carrito";


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos/cat/:categoria" element={<ItemListContainer />} />
            <Route path="/productos/:_id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
