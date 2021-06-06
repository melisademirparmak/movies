import React, { Component } from "react";

class MovieList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm">
            <img
              src="https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/8/0/3/1206803_Intersetellar.jpg"
              alt="İmage 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sample Movie</h5>
              <p className="card-text">Sample movie description</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-md bn-outline-danger">
                  Göster
                </button>
                <h2>
                  <span className="badge bg-info">9.0</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
