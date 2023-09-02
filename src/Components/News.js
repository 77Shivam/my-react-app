import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  constructor(){
    super();
    console.log=("hello i am constructor");
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c26331e9f74c487989086b4fa65e4571&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
    }

    handlePreviousClick=async()=>{
      //console.log("previos")
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c26331e9f74c487989086b4fa65e4571&page=${this.state.page-1}&pageSize=${this.props.pageSize} `;
      let data = await fetch(url);
      let parsedData = await data.json()
      // console.log(parsedData); 
      this.setState({
        page:this.state.page-1,
        articles: parsedData.articles
      })      
    } 
    handleNextClick=async()=>{
      //console.log("Next")
      if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c26331e9f74c487989086b4fa65e4571&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      // console.log(parsedData); 
      this.setState({
        page:this.state.page+1,
        articles: parsedData.articles
      })
    }
    }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">DAILY HUNT-Top News</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}  imageUrl={element.urlToImage}newsUrl={element.url}/>
          </div> 
        })}
          
  
        </div> 
        <div className='container d-flex justify-content-between' >
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePreviousClick} >&larr; previous</button>
        <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
