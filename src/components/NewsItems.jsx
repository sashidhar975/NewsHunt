import React, { Component } from "react";

export default class NewsItems extends Component {

  render() {
    let { title, description,imageUrl,url } = this.props;
   

    return (
      <>
        <div className="container-xl " id="main">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}..</h5>
              <p className="card-text">{description}..</p>
              <a href={url} className="btn btn-sm btn-success">
                learn more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
