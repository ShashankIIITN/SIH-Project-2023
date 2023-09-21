import Navbar from "./components/navbar/Navbar";
import './components/navbar/Navbar.css'

function App() {
  const appdata = {
    "name": "MyApp",
  }
  return (
    <div className="App">
      <Navbar appdata ={appdata} />
    </div>
  )
}

export default App;
