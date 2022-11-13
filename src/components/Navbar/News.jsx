import React, { Component } from "react";
import NewsItems from "../NewsItems";
import "./News.css";
import PropTypes from "prop-types"

export default class News extends Component {
  articles = [];

  static propsTypes={
         category:PropTypes.string
  }

  constructor() {
    super();
    // console.log("i am a constructor");
    this.state = {
      articles: this.articles,
    };
  }
 async  componentDidMount(){
    // console.log("i am cdm");
    let url = 
    `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ead24d8a104947e58fdeada964a39fbb`;
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
  }
  
  render() {
    // console.log("i am render");
    return (
      <>
     
        <div className="container main mt-5 ">
          {this.state.articles.map((elements) => {
            return(
              <div className="col-md-4 " key={elements.url} >
            <NewsItems
              title={elements.title?elements.title.slice(0,40):""}
              description={elements.description?elements.description.slice(0,88):""}
              imageUrl={elements.urlToImage?elements.urlToImage:""}
              url={elements.url}
              />
              </div>
            )
            })}
            </div>
            </>
    );
  }
}
