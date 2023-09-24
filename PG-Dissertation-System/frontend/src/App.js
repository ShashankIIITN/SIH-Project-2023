import './components/navbar/Navbar.css'
import { Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainSearchPage from './components/MainSearchPage/MainSearchPage';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/ProfilePage';
import HistoryPage from './components/History/HistoryPage';
import SavedPage from './components/Saved/SavedPage';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Works from './components/Works/Works';
import Searchbar from './components/Searchbar/Searchbar';
import RegisterModal from './components/RegisterModal/RegisterModal';
import Ticket from './components/Ticket/Ticket';
import Advsearchsidebar from './components/Searchbar/Advsearchsidebar';
import CustomizedAccordions from './components/Saved/PlaylistAccordian/SavedAccordian';
import { useSelector } from 'react-redux';



function App() {


  return (

    <div className="App">
      {/* <Searchbar/> */}
      {/* <Advsearchsidebar/> */}
      <Routes>
        <Route path="/" element={<MainSearchPage />}></Route>
        <Route path="/AvdSearchPage" element={<MainSearchPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/saved" element={<SavedPage />}></Route>
        <Route path="/sponsorship" element={<Sponsorship />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path='/Profile' element={<Profile />}> </Route>
      </Routes>
    </div>

  )
}

export default App;
