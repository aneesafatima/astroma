
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Homepage, PlanetaryInfo, StargazingGuide, AstroQuiz} from './components';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path="/planetary-hub" element={<PlanetaryInfo />}>
      </Route>
      <Route path="/stargazing-guide" element={<StargazingGuide />}>
      </Route>
      <Route path="/astro-quiz" element={<AstroQuiz />}>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
