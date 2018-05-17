import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /// will need to also fetch data from slug only so she can share a specific page. Each page should have a specific slug

  componentDidMount() {
    const id = this.props.location.state.id;
    let projectURL = "http://localhost:8888/wp-json/wp/v2/projects/" + id;

    fetch(projectURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ project: response });
      });
  }

  displayProject = () => {
    return (
      <div className="gallery">
        <div className="gallery-block">
        <div className='img-cover'>
          <img
              className="gallery-img gallery-img-large"
              src={this.state.project.acf.image_1.url}
              alt={this.state.project.acf.image_1.alt}
            />
        </div>
          
          <div className="gallery-block-small">
            <img
              className="gallery-img"
              src={this.state.project.acf.image_2.url}
              alt={this.state.project.acf.image_2.alt}
            />
            <img
              className="gallery-img"
              src={this.state.project.acf.image_3.url}
              alt={this.state.project.acf.image_3.alt}
            />
          </div>
        </div> 

        <div className="project-info">Info about projects go here</div>

        <div className="gallery-block">
          <img
            className="gallery-img gallery-img-large img-cover"
            src={this.state.project.acf.image_4.url}
            alt={this.state.project.acf.image_4.alt}
          />
          <div className="gallery-block-small">
            <img
              className="gallery-img"
              src={this.state.project.acf.image_5.url}
              alt={this.state.project.acf.image_5.alt}
            />
            <img
              className="gallery-img"
              src={this.state.project.acf.image_6.url}
              alt={this.state.project.acf.image_6.alt}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>PROJECTS PAGE</h1>
        {this.state.project ? this.displayProject() : null}
      </div>
    );
  }
}
export default Projects;
