import React, { useEffect,useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
 
 const [articles,setArticles] = useState([]);
 const [loading,setLoading] = useState(true);
 const [page,setPage] = useState(1);
 const [totalResults,settotalResults] = useState(0);


 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};



  
  const updateNews = async()=>{
    props.setProgress(10);
    // const url =
    // `https://newsapi.org/v2/everything?q=tesla&from=2024-09-05&sortBy=publishedAt&apiKey=416486f6bd76445d8ae6643f9033ac83`;
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    setLoading(true);
    props.setProgress(20);
     let data = await fetch(url);
     props.setProgress(50);
     let parsedData = await data.json();
     props.setProgress(80);

     setArticles(parsedData.articles)
     settotalResults(parsedData.totalResults)
     setLoading(false)
 
     props.setProgress(100);
    
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} -  News Express`;

    updateNews()
  
  }, [])
  

//   const handlePreviousClick = async () => {
    
//     setPage(page -1);
//     updateNews();
//   };

//  const handleNextClick = async () => {
//     setPage(page +1);
//     updateNews();
//   };



   const fetchMoreData = async () => {
    
        
        const url =
           `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      
      setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults)
        
    };

  
    return (
      <div className="container my-3" style={{paddingTop:'70px'}}>
       
        <h1 className="my-3" >Top {capitalizeFirstLetter(props.category)} Headlines</h1>

      
        <h3  style={{color: '#af2e2f'}}>Trending in {props.country}</h3>
        
        <hr className="border border-danger border-2 opacity-50"></hr>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          </div>
        <div className="row my-4 ">
       
          { articles.map((element) => {
            return (
              <div className=" col-lg-4 col-md-6 col-sm-12" key={element.url}>

                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : ""
                  }
                  imgURL={element.urlToImage}
                  newsURL={element.url}
                  date = {element.publishedAt}
                  source = {element.source}
                />


              </div>
            );
          })}
          
          {/* <div className="container d-flex justify-content-between px-4">
            <button disabled={this.state.page <= 1} type="button"className="btn px-4 btn-dark" onClick={this.handlePreviousClick} > &larr; Previous </button>
            <button disabled={this.state.page +1 >= Math.ceil(this.totalResults/props.pageSize)} type="button" className="btn px-4 btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
          </div> */}
        </div>
        </InfiniteScroll>
      </div>
    );
  
}


News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}

export default News;
