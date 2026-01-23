import {useEffect, useState} from "react";
import React from "react";
import ListItem from "./ListItem.js"
import "./List.css"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function List(props){
    
function displayVal(){
  const searchInput = document.getElementById('search');
  const value = searchInput.value.toLowerCase();
  let copy = [...props.sites];
  copy = copy.filter(site => site.Site.toLowerCase().includes(value));
  props.setSitesCopy(copy);
}
return( <>
    
    <header>
        <h1>Boyle County Sites</h1>
        <p>
            <input type="text" id="search" placeholder="Enter Site..."/>
            <button onClick = {displayVal}>Enter</button>
        </p>
        <p>
            <button id="favButton" type="button"><Link to={`/favorites`}>Favorites</Link></button>
        </p>
      </header>
    <ul>
        {props.sitesCopy.map(site => <ListItem key={site.SiteID} site ={site} />)}
    </ul>
</>);

}

export default List
