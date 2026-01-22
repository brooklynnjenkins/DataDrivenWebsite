import {useEffect, useState} from "react";
import React from "react";
import ListItem from "./ListItem.js"
import "./List.css"

function List(props){
    

return( <>
    
    <header>
        <h1>Boyle County Sites</h1>
      </header>
    <ul>
        {props.sitesCopy.map(site => <ListItem key={site.SiteID} site ={site} />)}
    </ul>
</>);

}

export default List
