import { useState, useEffect } from 'react'
import { HashRouter as Router,Routes, Route } from "react-router-dom";
 import Planet from "./components/Planet";
import Character from "./components/Character";
import Home from "./components/Home";
import{Container} from "react-bootstrap";
import PreLoading from "./components/PreLoading";
import Navs from "./components/Navs";
import Navibar from "./components/Navibar";
 





function App() {
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return(
    
    <Router>
    <div className="App">
    {loading === false ? (
       <Container>
         <Navibar/>
        <Navs/>
        <Routes>
                
        <Route exact path="/" element={<Planet/>} />
                <Route path="/planet" element={<Planet/>} />
                <Route path="/character" element={<Character/>} />
                
                
              </Routes>
         
         </Container>
     ) : (
      <PreLoading />
)}
    </div>
    </Router>
   
  );
}

export default App;
