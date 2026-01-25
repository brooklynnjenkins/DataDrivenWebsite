import {useEffect, useState} from "react";
import React from "react";
import ListItem from "./ListItem.js"
import "./List.css"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function List(props){
const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      props.setSitesCopy(props.sites);
    } else {
      const filtered = props.sites.filter(site =>
        site.Site.toLowerCase().includes(search.toLowerCase())
      );
      props.setSitesCopy(filtered);
    }
  }, [search, props.sites]);

return( <>
    
    <header>
        <h1>Boyle County Historical Sites</h1>
        <p>
            <input onChange={(e) => setSearch(e.target.value)}
               type="text" id="search" placeholder="Search for a Site..."/>
        </p>
        <p>
           <Link to={`/favorites`}> <button id="favButton" type="button">Favorites</button></Link>
        </p>
      </header>
    <ul>
        {props.sitesCopy.map(site => <ListItem key={site.SiteID} site ={site} />)}
    </ul>
</>);

}

export default List
