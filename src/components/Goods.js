import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Goods extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
    let goodsURL = "http://localhost:8888/wp-json/wp/v2/home-goods";
        fetch(goodsURL)
        .then(response => response.json())
        .then(response => {
            this.setState({ goods: response });
        });

    }

    displayGoods=()=>{
        let goods = this.state.goods.map((good, index)=>{
            return (
                <div key={index}>
                <img src={good.acf.image.sizes.medium_large} 
                     alt = {good.acf.image.alt}/>
            </div>
            )
           
        })

        return goods

    }



    render(){
        return(
            <div>
                <h1 className='project-title' >ASSEMBLY HOME GOODS</h1>
                <div className = 'goods-gallery'>
                {this.state.goods?this.displayGoods():null}
                </div>
            </div>
        )
    }
}

export default Goods;