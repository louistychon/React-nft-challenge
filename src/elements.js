import React from 'react';
import "./elements.css"
import {imageeth} from "./images/image-equilibrium.jpg"

class Item extends React.Component {
    render(){
        return (
            <div className="itemContainer">
            <div className="imageEth"><img alt="coucou" src={equilibrum.img}></img></div>
            <div><p>Equilibrum #{equilibrum.serialnumber}</p></div>
            <div>{equilibrum.desc}</div>
            <div>
                <div><p><i className="fa-brands fa-ethereum"></i> {equilibrum.price}ETH</p></div>
                <div><p><i className="fa-solid fa-clock"></i> {equilibrum.count} days left</p> </div>
            </div>
            <hr></hr>
            <div><p><img alt="coucou" className="" src={equilibrum.imgseller}></img><span>Creation of</span>{equilibrum.seller}</p></div>
            </div>
        )
    }
}

const equilibrum = {img: imageeth, serialnumber: 3429, desc:"Our equilibrum collection promotes balances and calm.", price: 0.041, count:3, seller: "Jules Wyvern", imgseller: "images/image-avatar.png"}
// const equilibrum = new Item("img/image-equilibrium.jpg", 3429, "Our equilibrum collection promotes balances and calm.", 0.041, 3, "Jules Wyvern", "img/image-avatar.png")

export {
    Item
}