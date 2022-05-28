import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types';
import InfiniteScroll from"react-infinite-scroll-component";

export class News extends Component {
  // static defaultProps={
  //   country: "in",
  //   pagesize:20,
  //   category:"general"
  // }
  // static proptypes={
  //   country: PropTypes.string,
  //   pagesize:PropTypes.number,
  //   category:PropTypes.string
    
  // }
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      // totalResults=0
    };
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf082048a6df409c92ef4746bdfc4537&page=1&pagesize=100`;
    this.setState({loading:true});
    let Data = await fetch(url);
    let parsedData = await Data.json()
    this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
  loading:false
});
  }
  componentDidMount=async()=>{
     this.updateNews();
  }
  handlenextclick= async()=>{
    this.updateNews();
    }
  
  handlepreviousclick=async()=>{
    this.updateNews();
   }
  fetchMoreData=async()=>{
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf082048a6df409c92ef4746bdfc4537&page=1&pagesize=100`;
    this.setState({loading:true});
    let Data = await fetch(url);
    let parsedData = await Data.json()
    this.setState({articles:this.state.articles.concat( parsedData.articles),
    totalResults: parsedData.totalResults,
  loading:false
});
  }

  render(){
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'90px'}}>NewsMonkey - Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {/*!this.state.loading &&*/ this.state.articles.map((Element) => {
              return <div className="col-md-4 my-2"key={Element.url}>
               <NewsItem title={Element.title?Element.title:""} description={Element.description?Element.description:""} ImageUrl={Element.urlToImage} newsUrl={Element.url} author = {Element.author} date = {Element.publishedAt}/>
             </div>
          })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
      <button type="button"disabled={this.state.page<=1} className="btn btn-dark my-5"onClick={this.handlepreviousclick}>&larr;previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className="btn btn-dark my-5 "onClick={this.handlenextclick}>Next &rarr;</button>
      </div> */}
      
      </div>
      
    )
    

    }
  }
export default News;
    
