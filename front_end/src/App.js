import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// require('dotenv').config()
import Layout from "./pages/Layout";
import Mint from "./pages/Mint";
import GetLink from "./pages/GetLink";
import Transfer from "./pages/Transfer";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>}/>
          <Route path="/mint" element={<Mint />} />
          <Route path="/getLink" element={<GetLink />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <NftMinting/>
    //   <GetLink/>
    // </div>
  );
}

export default App;
