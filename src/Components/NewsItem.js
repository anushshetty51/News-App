import React from 'react'

const NewsItem=(props)=> {
        let { title, descriptions, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" >
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: '-10%' }} > {source} </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{descriptions}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} mins ago</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
