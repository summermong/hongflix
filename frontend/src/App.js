import "./App.css";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login></Login>
            </>
          }
        ></Route>
        <Route
          path="/join"
          element={
            <>
              <Join></Join>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
