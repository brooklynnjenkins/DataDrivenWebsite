import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";

function ListItem(props){

    return(
    <div>
        <li>
            <Link to={`/site/${props.site.SiteID}`}> 
                <img src={`imgs/${props.site.Image}`} alt = {`${props.site.Site} Picture`}/>
            </Link>
            <section>
                <h2>
                    <Link to={`/site/${props.site.SiteID}`}> 
                        {props.site.Site} 
                    </Link>     
                </h2>
            </section>
        </li>
    </div>
    );
}


export default ListItem