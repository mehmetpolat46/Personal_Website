import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Abouts from "./components/Abouts/abouts";


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Abouts/>
      <Works />
      <Contact/>
      <Footer/>
 
    </div>
  );
}

export default App;