import PrimarySearchAppBar from "./components/AppBar/AppBar";
import ExtModal from "./components/ExtMentModal/ExtModal";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import './components/navbar/Navbar.css'
import {Routes, Route} from 'react-router-dom'
import MatExtModal from './components/MaterialExtModal/MatExtModal'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const navData = {
    "name": "MyApp",
  }
  const modData = {
    "name": "External Mentors",
  }
  return (
    <>
    <div className="App">
      <PrimarySearchAppBar appdata={navData}/>
      {/* <ExtModal moddata={modData} /> */}
      <MatExtModal/>
      
    </div>
    <Routes>
      <Route path="/"></Route>
    </Routes>
    </>
  )
}

export default App;
