import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

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
      {sites.length}
    </div>
  );
}

export default App;
