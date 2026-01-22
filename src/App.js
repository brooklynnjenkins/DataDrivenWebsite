import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import List from "./List.js"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import SiteDetails from "./SiteDetails.js"
import "./List.css"

function App() {
  const [sites, setSites] = useState([{}]);
  const [sitesCopy, setSitesCopy] = useState(sites);

  useEffect(() => {
    async function fetchSite(){
      const url = "/BoyleSites.json"
      const response = await fetch(url)
      if(response.ok){
        const result = await response.json();
        setSites(result)
        console.log(result)
        setSitesCopy(result)
      }
    }
    fetchSite()
  }, [])
  console.log(sites.length)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path = "/" element={<List sites={sites} setSitesCopy = {setSitesCopy} sitesCopy ={sitesCopy}/>}/>
            <Route path = "/site/:SiteID" element={<SiteDetails sites = {sites} />}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
