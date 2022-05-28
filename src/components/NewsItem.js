import React, { Component } from "react";

export class NewsItem extends Component {
    

  render() {
      let {title,description,ImageUrl, newsUrl, author,date} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!ImageUrl?"https://techcrunch.com/wp-content/uploads/2021/12/congress-instagram.jpg?w=711":ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success">By {!author?"unknown":author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
