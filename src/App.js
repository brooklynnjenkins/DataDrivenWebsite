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
        setSites(result.Site)
        console.log(result)
        setSitesCopy(result.Site)
      }
    }
    fetchSite()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
