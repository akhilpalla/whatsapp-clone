import Login from "./Components/Login";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import PageNotFound from "./Components/PageNotFound";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>WhatsApp Clone</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
