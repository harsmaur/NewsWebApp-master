import React from "react"

const NewsItem=(props)=> {
  
  
    let {title, description,imgURL,newsURL,date,source} = props // by this method we get props in class based components
    return (
      <div className='my-3'>
        <div className="card" style={{width: 'auto',height:'auto'}}>
              <img src={!imgURL?'https://cdn.ndtv.com/common/images/ogndtv.png':imgURL} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge bg-secondary">{source.name}</span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Last updated {new Date(date).toGMTString()}</small></p>
             <a href={newsURL} className="btn btn-sm btn-dark" target='blank'>Full Story</a>
         </div>
      </div>
</div>
    )
  
}

export default NewsItem