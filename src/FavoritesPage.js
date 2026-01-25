import ListItem from "./ListItem"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React from 'react';
import {useEffect, useState} from "react";
    
function FavoritesPage(props){
    const[ascending, setAscending] = useState(true);
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const [favoritesCopy, setFavoritesCopy] = useState([]);

    useEffect(() => {
        const favSites = props.sites.filter(site => storedFavorites.includes(site.SiteID));
        setFavoritesCopy(favSites);
    }, [props.sites]);
    function sorting(){
        if(ascending){
            let copy=[...favoritesCopy]
            copy.sort((a,b) => a.Site.localeCompare(b.Site));
            setAscending(false);
            setFavoritesCopy(copy)
        }
        else{
            let copy=[...favoritesCopy]
            copy.sort((a,b) => b.Site.localeCompare(a.Site));
            setAscending(true);
            setFavoritesCopy(copy)
        }
    }
    return( <>  
    <header>
        <h1>Your Saved Sites</h1>
        <p id="savedButtons">
            <Link to={`/`}><button>All Sites</button></Link>
            <button onClick={sorting}>Alphabetical Sort</button>
        </p>
      </header>
    <ul>
        {favoritesCopy.map(favorite => <ListItem key={favorite.SiteID} site={favorite}/>)}
    </ul>
</>);

}

export default FavoritesPage;