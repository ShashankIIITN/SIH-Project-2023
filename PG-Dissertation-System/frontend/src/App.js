import './components/navbar/Navbar.css'
import { Routes, Route } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainSearchPage from './components/MainSearchPage/MainSearchPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element = {<MainSearchPage/>}></Route>
        <Route path="/AvdSearchPage" element = {<MainSearchPage/>}></Route>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App;
