import React, { createElement } from 'react';
import imageeth from "../images/image-equilibrium.jpg";
import imageavatar from "../images/image-avatar.png";
import "@fortawesome/fontawesome-free/css/all.css";



class Item extends React.Component{
    onHoverImgEth = () => {
        let img = document.querySelector('.imageEth')
        let whitefilter = document.querySelector('.whitefilter')
        let i  = document.createElement('i')
        i.classList.add('fa-solid','fa-eye', 'fa-2xl');
        i.style.position = 'absolute';
        i.style.top = "50%";
        i.style.left = "50%";
        img.appendChild(i);
        whitefilter.style.display = 'block';

    }
    render(){
        return (
            <div className="itemContainer">
            <div className="imageEth" onClick={() => this.onHoverImgEth()}><img alt="coucou" src={equilibrum.img}></img>
            <div className="whitefilter"></div>
            </div>
            <div className="desc"><p>Equilibrum #{equilibrum.serialnumber}</p></div>
            <div>{equilibrum.desc}</div>
            <div className="divflex">
                <div><p><i className="fa-brands fa-ethereum">&nbsp;</i> {equilibrum.price}ETH</p></div>
                <div><p><i className="fa-solid fa-clock"> &nbsp;</i> {equilibrum.count} days left</p> </div>
            </div>
            <hr></hr>
            <div><p><img alt="coucou" className="imground" src={equilibrum.imgseller}></img><span>Creation of</span>{equilibrum.seller}</p></div>
            </div>
           
        )
    }
}

const equilibrum = {img: imageeth, serialnumber: 3429, desc:"Our equilibrum collection promotes balances and calm.", price: 0.041, count: 3, seller: "Jules Wyvern", imgseller: imageavatar}
// const equilibrum = new Item("img/image-equilibrium.jpg", 3429, "Our equilibrum collection promotes balances and calm.", 0.041, 3, "Jules Wyvern", "img/image-avatar.png")

export {Item}