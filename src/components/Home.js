import React, { Component } from "react";
import "../App.css";
import Projects from "./Projects.js";
import { Route, Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    let projectsURL = "http://localhost:8888/wp-json/wp/v2/projects";
    fetch(projectsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ projects: response });
      });

    let furnitureURL = "http://localhost:8888/wp-json/wp/v2/furniture-design";
    fetch(furnitureURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ furniture: response });
      });

    let goodsURL = "http://localhost:8888/wp-json/wp/v2/home-goods";
    fetch(goodsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ goods: response });
      });
  }

  displayFurniture = () => {
    let furniture = this.state.furniture[0];
    return (
      <div className='img-wrap'>
        <div className="img-cover img-opacity">
          <Link
            to={{
              pathname: "/furniture-design",
              state: {
                id: furniture.id.toString()
              }
            }}
          >
            <img
              src={
                furniture.better_featured_image.media_details.sizes.large
                  .source_url
              }
              alt={furniture.better_featured_image.alt_text}
            />
          </Link>
          <div className='band'>FURNITURE design</div>
        </div>
      </div>
    );
  };

  displayGoods = () => {
    let goods = this.state.goods.slice(0, 3);
    goods = goods.map((good, index) => {
      return (
          <div className= 'img-opacity' key={index}>
            <Link
              to={{
                pathname: "/home-goods",
                state: {
                  id: good.id.toString()
                }
              }}
            >
              <img
                src={
                  good.better_featured_image.media_details.sizes.medium_large
                    .source_url
                }
                alt={good.better_featured_image.alt_text}
              />
            </Link>
          </div>
       
      );
    });
    return goods;
  };

  render() {
    let projects = this.state.projects.map((project, index) => {
      return (
        <div className='img-wrap'>
          <div className="img-cover img-opacity" key={index}>
          
            <Link
              to={{
                pathname: "/projects",
                state: {
                  id: project.id.toString()
                }
              }}
            >
              <img 
                src={
                  project.better_featured_image.media_details.sizes.large
                    .source_url
                }
                alt={project.better_featured_image.alt_text}
              />
            </Link>
            <div className='band'>{project.title.rendered}</div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="header-banner img-opacity banner-parallax" >
              <h1 className='header'>ASSEMBLY HOME DESIGN</h1>
            </div>
        
            <div>{projects}</div>
        
            
            <div>
                {this.state.furniture ? this.displayFurniture() : null}
              
              </div>
            <div className='img-wrap'>         
              <div className='goods-gallery '>{this.state.goods ? this.displayGoods() : null}</div>
              <div className='band'>HOME GOODS design</div>
            </div>
      </div>
    );
  }
}

export default Home;
