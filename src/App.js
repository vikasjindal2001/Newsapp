import './App.css';
import Navbar from './components/Navbar';
import Sports from './components/Sports';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Newscomponent from './components/Newscomponent';
import Entertainmentsec from './components/Entertainmentsec';
import International from './components/International';


function App() {
  return (
    <>
    <Router>
    <Navbar title="NEWS" about="About" />
    <Routes>
      <Route path="/Entertainment_News" element={<Entertainmentsec/>}/>
      <Route path="/" element={<Newscomponent/>}/>
      <Route path="/Sports_News" element={<Sports/>}/>
      <Route path="/International_News" element={<International/>}/>
    </Routes>
    </Router>
    </>
  );
}
export default App;
