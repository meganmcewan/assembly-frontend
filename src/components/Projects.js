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
      <div className="img-cover">
        <img
          src={
            this.state.project.better_featured_image.media_details.sizes.large
              .source_url
          }
          alt={this.state.project.better_featured_image.alt_text}
        />
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
