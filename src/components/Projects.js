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
          <div className="img-cover">
            <img
              src={this.state.project.acf.image_1.sizes.large}
              alt={this.state.project.acf.image_1.alt}
            />
          </div>

          <div className="gallery-block-small">
          <div className='img-gallery'>
            <img
                src={this.state.project.acf.image_2.sizes.medium_large}
                alt={this.state.project.acf.image_2.alt}
              />
          </div>
          <div className='img-gallery'>
              <img     
              src={this.state.project.acf.image_3.sizes.medium_large}
              alt={this.state.project.acf.image_3.alt}
            />
          </div>
           
          </div>
        </div>

        <div className="project-info">{this.state.project.content.rendered}</div>

        <div className="gallery-block">
          <div className="img-cover">
            <img
              src={this.state.project.acf.image_4.sizes.large}
              alt={this.state.project.acf.image_4.alt}
            />
          </div>

          <div className="gallery-block-small">
          <div className='img-gallery'>
            <img
                src={this.state.project.acf.image_5.sizes.medium_large}
                alt={this.state.project.acf.image_5.alt}
              />
          </div>
          <div className='img-gallery'>
              <img     
              src={this.state.project.acf.image_6.sizes.medium_large}
              alt={this.state.project.acf.image_6.alt}
            />
          </div>
           
          </div>
        </div>

  
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <h1 className='project-title'>
        {this.state.project ?this.state.project.title.rendered: null}
        </h1>      
        {this.state.project ? this.displayProject() : null}
      </div>
    );
  }
}
export default Projects;
