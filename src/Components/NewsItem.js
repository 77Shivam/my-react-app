import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, desciption, imageUrl, newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src= {!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/22/600x338/Adani_share_price_Adani_Power_share_Adani_Port_sha_1692688801874_1692688802114.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desciption}</p>
    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
