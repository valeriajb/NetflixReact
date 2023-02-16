import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/movieWatch/Watch";
import PrivateRouter from "./hooks/PrivateRouter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        >
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Watch />} />
        <Route path="/Register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
