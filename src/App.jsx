import { BrowserRouter, Routes, Route,useLocation  } from "react-router-dom";
import {
  Homepage,
  CosmicGallery,
  StargazingGuide,
  Planets,
  HomeIcon,
} from "./components";

function App() {
  return (
    <BrowserRouter>
       <HomeIcon/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/planetary-hub" element={<Planets />}></Route>
        <Route path="/stargazing-guide" element={<StargazingGuide />}></Route>
        <Route path="/cosmic-gallery" element={<CosmicGallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
