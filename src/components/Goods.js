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
                <h1 className='project-title' >HOME GOODS design</h1>
                <div className='gallery'>
                    <div className = 'project-info goods-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                    <div className = 'goods-gallery'>
                    {this.state.goods?this.displayGoods():null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods;