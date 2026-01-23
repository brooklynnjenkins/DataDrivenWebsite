import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
function FavListItem(props){
    return(
        <li>
            <img src={`imgs/${props.site.Image}`} alt = "Picture"/>
            <section>
                <h2>
                    <Link to={`/site/${props.site.SiteID}`}> 
                        {props.site.Site} 
                    </Link>     
                </h2>
            </section>
        </li>
    );
}

export default FavListItem;