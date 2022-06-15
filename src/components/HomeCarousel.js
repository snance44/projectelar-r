import React from "react";
import { Carousel } from "react-bootstrap";

export default class HomeCarousel extends React.Component {
  render() {
    return (
      <div className="container mb-5 py-5" style={{ "max-width": "900px" }}>
        <Carousel>
          <Carousel.Item style={{ "max-width": "900px" }}>
            <img
              style={{ "max-width": "900px" }}
              className="d-block w-100 car"
              src={"./assets/images/student1.jpg"}
              alt="Student studying"
            />
            <Carousel.Caption className="car-caption">
              <h3>Increase Involvement</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ "max-width": "900px" }}>
            <img
              style={{ "max-width": "900px" }}
              className="d-block w-100 car"
              src={"./assets/images/student2.jpg"}
              alt="Student studying"
            />

            <Carousel.Caption className="car-caption">
              <h3>Use for Guided or Independent Practice</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ "max-width": "900px" }}>
            <img
              style={{ "max-width": "900px" }}
              className="d-block w-100 car"
              src={"./assets/images/student3.jpg"}
              alt="Student studying"
            />

            <Carousel.Caption className="car-caption">
              <h3>Meant for Teenage Students</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
