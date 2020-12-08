import "./App.css";
import NavPills from "./components/NavBar";
import TaskSelector from "./pages/TaskSelector";
import LogoEditor from "./pages/LogoEditor";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <NavPills />
        <Route path="/" exact component={TaskSelector} />
        <Route path="/LogoEditor" component={LogoEditor} />
      </Router>
    </div>
  );
}

export default App;
