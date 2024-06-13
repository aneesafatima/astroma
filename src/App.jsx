
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage, PlanetaryInfo, StargazingGuide, Planets} from './components';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/planetary-hub" element={<Planets />}>
      </Route>
      <Route path="/stargazing-guide" element={<StargazingGuide />}>
      </Route>
  
      <Route path = "/cosmic-gallery" element={<PlanetaryInfo/>}> 
        
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
