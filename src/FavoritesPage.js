import FavListItem from "./FavListItem"
function FavoritesPage(props){
    const storedFavorites = localStorage.getItem('favorites');
    return( <>
    
    <header>
        <h1>Your Saved Sites</h1>
        <p>
            <button>Alpabetical Sort</button>
        </p>
      </header>
    <ul>
        {storedFavorites.map(favorites => <FavListItem />)}
    </ul>
</>);

}

export default FavoritesPage;