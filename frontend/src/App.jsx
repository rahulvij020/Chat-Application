import { Navigate, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Chat from "./pages/Chat.jsx";
import NotFound from "./components/NotFound.jsx";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/LoadingScreen.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;