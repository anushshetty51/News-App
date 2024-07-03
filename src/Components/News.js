import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(0);

    
   const capitalizeFirstLetter=(funcString) =>{
        return funcString.charAt(0).toUpperCase() + funcString.slice(1);
    }

   const  updateNews=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalPages(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }
    useEffect(()=>{
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)}-News App`;

    },[]);
  
   
    // handleprevClick = async () => {
    //     setState({ page: page - 1 });
    //     updateNews();
    // };

    // handlenextClick = async () => {
    //     setState({ page: page + 1 });
    //     updateNews();

    // };
   const fetchMoreData = async () => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalPages(parsedData.totalResults);
        setLoading(false);
       
    };

    
        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px' ,marginTop:'90px'}}>News monkey-Top {capitalizeFirstLetter(props.category)} headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalPages}
                    loader={loading && <Spinner />}
                >
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} descriptions={element.description ? element.description + "....." : ""} imageUrl={element.urlToImage ?
                                    element.urlToImage : "https://www.aljazeera.com/wp-content/uploads/2024/07/AFP__20190209__1D85KC__v1__HighRes__SluciaTourism-1719794274_755dbb-1719797289.jpg?resize=1200%2C630&quality=80"} newsUrl={element.url} author={element.author ? element.author : "unknown "} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="conatainer mx-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handleprevClick}> &larr;Previous</button>
                        <button type="button" disabled={page + 1 > Math.ceil(totalPages / props.pagesize)} className="btn btn-dark " onClick={handlenextClick}>Next &rarr;</button>

                    </div> */}


            </>
        )
    
}
 News.defaultProps = {
    country: 'in',
    pagesize: 5,
    category: 'science'
}
 News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string

}

export default News
