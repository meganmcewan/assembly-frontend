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
  }

  displayFurniture = () => {
    let furniture = this.state.furniture[0];
    console.log("this is furniture", furniture);
    return (
      <div className="img-cover">
        <Link
          to={{
            pathname: "/furniture",
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
      </div>
    );
  }
}

export default Home;
