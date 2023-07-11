import React from "react";

import sliderImg1 from "../resources/Images/hero.jpg";
import sliderImg2 from "../resources/Images/hero2.jpg";
import sliderImg3 from "../resources/Images/hero3.jpg";
import { Link } from "react-router-dom";

const HomePagePublic = () => {
  return (
    <div>
      {/* Slider  */}
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={sliderImg1} class="d-block  w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={sliderImg2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={sliderImg3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ABout Us Section  */}
      <div id="about" class="card text-center mt-4">
        <div class="card-body">
          <h5 class="card-title">Communication Solution Of Patients</h5>
          <p class="card-text text-success">
            We are here to support the patients to describe their disease
            description or previous medical history as efficient as possible.
          </p>
          <Link to="/register" class="btn btn-success">
            Register
          </Link>
        </div>

        <div class="card-footer text-body-secondary">
          Register Your Account to See detailed Information{" "}
        </div>
      </div>

      {/* <div class="card my-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={sliderImg2} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Communication Solution Of Patients</h5>
              <p class="card-text">
                We are here to support the patients to describe their disease
                description or previous medical history as efficient as
                possible.
              </p>
              <Link to="/register" class="btn btn-success">
                Register
              </Link>
              <p class="card-text">
                <small class="text-body-secondary">
                  Register Your Account to See detailed Information{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePagePublic;
