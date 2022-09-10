import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AgrProducto from "./components/AgrProducto/AgrProducto";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ChatContainer from './components/Chat/ChatContainer'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={[<AgrProducto />, <ItemListContainer />, <ChatContainer />]} />
          <Route path="/productos/cat/:categoria" element={<ItemListContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
