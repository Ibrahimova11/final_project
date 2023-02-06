import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home"
import "./App.css";





function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
 
   

</Routes>

<Footer/>
</BrowserRouter>

  
  );
}

export default App;
