import React, {useState} from "react";
import Heart from 'react-heart';

function Beercard(props) {
    const [active, setActive] = useState(false)
    return (
        <li style={{listStyle: "none"}}>
            <div id="heart" style={{ width: "2rem" }}>
                <Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
            </div>
            <img id="beer-img" src={props.image_url}></img>
            <li style={{listStyle: "none"}}>
                <div id="name">Name: {props.name}</div>
                <div id="date-brewed">First Brewed: {props.first_brewed}</div>
                <div id="tagline">Tagline: {props.tagline}</div>
                <div id="abv">ABV: {props.abv}</div>
            </li>
            <div id="description">{props.description}</div>
        </li>
    )
}

export default Beercard;
