import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    </Routes>
   </Router>
  );
}

export default App;
