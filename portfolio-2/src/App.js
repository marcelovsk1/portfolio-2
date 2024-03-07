import Navbar from "./Components//Navbar/Navbar"
import './App.css'
import Intro from "./Components//Intro/Intro";
import About from "./Components//About/About"
import Experience from "./Components//Experience/Experience"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <About />
      <Experience />
    </div>
  );
}

export default App;
