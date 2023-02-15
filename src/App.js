import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/movieWatch/Watch";
import PrivateRouter from "./hooks/usePrivateRouter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          to="/"
          element={
            <PrivateRouter isUser={false}>
              <Home />
            </PrivateRouter>
          }
        >
          <Route to="/movie" element={<Watch />} />
        </Route>
        <Route />
        <Route to="/login" element={<Login />} />
        <Route to="/Register" element={<Register />} />
      </Routes>

      <Home />
    </div>
  );
}

export default App;
