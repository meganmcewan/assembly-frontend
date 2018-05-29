import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Furniture extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let furnitureURL = "http://localhost:8888/wp-json/wp/v2/furniture-design";
    fetch(furnitureURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ furniture: response });
      });
  }

  displayFurniture = () => {
    let allFurniture = this.state.furniture.map((furniture, index) => {
      return (
        <div className='furniture-wrap'>
          <div key={index}>
            <div className="furniture-title-bar">
              <div className="furniture-title">{furniture.title.rendered}</div>
              <div
                className="furniture-info"
                dangerouslySetInnerHTML={{ __html: furniture.content.rendered }}
              />
            </div>
            <div className='furniture-display-containter'>
              <div className='img-main'>
                  <img
                  src={furniture.acf.image_main.sizes.large}
                  alt={furniture.acf.image_main.alt}
                  />
              </div>
              <div className='furniture-display-stack'>
                  
                  <img 
                      src={furniture.acf.image_top.sizes.medium_large}
                      alt={furniture.acf.image_top.alt}
                      />
                  
                  <img 
                      src={furniture.acf.image_bottom.sizes.medium_large}
                      alt={furniture.acf.image_bottom.alt}
                      />
                
                  
                  
              </div>
            </div>
            
          </div>
        </div>
      );
    });

    return allFurniture;
  };

  render() {
    return (
      <div>
        <h1 className="project-title">FURNITURE design</h1>
        <div className='gallery'>{this.state.furniture ? this.displayFurniture() : null}</div>
      </div>
    );
  }
}

export default Furniture;
