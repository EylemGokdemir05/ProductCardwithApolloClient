import React from "react";
import {Link} from "react-router-dom";

export default function MyLikes(){
    return(
        <nav>
            <ul>
                <li>
                <Link to="/">ProductList</Link>
                <Link to="/likes">Likes</Link>
                </li>
            </ul>
        </nav>
    )
}