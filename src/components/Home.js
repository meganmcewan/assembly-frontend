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
      <div className="img-cover">
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
      </div>
    );
  };

  displayGoods = () => {
    let goods = this.state.goods.slice(0, 3);
    goods = goods.map((good, index) => {
      return (
        <div key={index}>
          <Link
            to={{
              pathname: "/goods",
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
        <div className="img-cover" key={index}>
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
        </div>
      );
    });

    return (
      <div className="App">
        <h1 className="header-banner" />
        <div>{projects}</div>
        {this.state.furniture ? this.displayFurniture() : null}
        <div className='goods-gallery'>{this.state.goods ? this.displayGoods() : null}</div>
      </div>
    );
  }
}

export default Home;
