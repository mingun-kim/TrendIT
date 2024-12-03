import React, {useState, useEffect} from 'react';
import './NewsSection.css';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const NewsSection = () => {
  const [keyword, setKeyword] = useSearchParams()
  const [news, setNews] = useState([])
  
  const key = keyword.get("keyword")

  useEffect(() => {
    let url = "http://146.56.161.252:3000/news"
    if (key !== null) {
      url += `/keyword?keyword=${key}`
    }
    fetch(url)
    .then((response) => response.json().then((data)=>{
      setNews(data)
      console.log(data)
    }))
  }, [])

  return (
    <div className="news-section">
      <h2>관련 자료</h2>
      <div className="news-cards">
        {news.map((item, index) => (
          <Link key={index} className="news-card" to={item.url}>
            <p className='newsTitle'>{item.title}</p>
            <span>{item.created_at.split("T")[0]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
