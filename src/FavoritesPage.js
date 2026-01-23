import ListItem from "./ListItem"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import React from 'react';
import {useEffect, useState} from "react";
    
function FavoritesPage(props){
    const[index, setIndex] = useState(true);
    const storedFavorites = localStorage.getItem('favorites');
    const [favorites, setFavorites] = useState(storedFavorites? JSON.parse(storedFavorites) : []);
    let favoritesArray = [];
    const [favoritesCopy, setFavoritesCopy] = useState(favoritesArray)
    function sorting(){
        if(index){
            let copy=[...favoritesCopy]
            copy.sort((a,b) => a.Site.localeCompare(b.Site));
            setIndex(false);
            setFavoritesCopy(copy)
        }
        else{
            let copy=[...favoritesCopy]
            copy.sort((a,b) => b.Site.localeCompare(a.Site));
            setIndex(true);
            setFavoritesCopy(copy)
        }
    }
    for(let i=0; i<props.sites.length; i++){
        for(let j=0; j<favorites.length; j++){
            if(props.sites[i].SiteID == favorites[j]){
                if(favoritesArray.includes(props.sites[i])){
                    const num = favoritesArray.indexOf(props.sites[i]);
                    favoritesArray.splice(num, 1);
                }else{
                    favoritesArray.push(props.sites[i]);
                }
            }
        }
    }
    return( <>  
    <header>
        <h1>Your Saved Sites</h1>
        <p id="savedButtons">
            <button><Link to={`/`}>All Sites</Link></button>
            <button onClick={sorting}>Alpabetical Sort</button>
        </p>
      </header>
    <ul>
        {favoritesCopy.map(favorite => <ListItem site={favorite}/>)}
    </ul>
</>);

}

export default FavoritesPage;