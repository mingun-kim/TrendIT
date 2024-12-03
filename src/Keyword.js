import React, {useState} from 'react';
import './App.css';
import GoogleTrends from "./GoogleTrends";
import NewsSection from './NewsSection';
import KeywordHeader from './KeywordHeader';
import TrendDescription from './TrendDescription';
import { useSearchParams } from 'react-router-dom';


const App = () => {
  const [keyword, setKeyword] = useSearchParams()
  const [words, setWords] = useState([])
  const [news, setNews] = useState([])
  const [keyNews, setKeyNews] = useState([])
  const goToSub = (sub) => {
    fetch("http://146.56.161.252:3000/keywords", {
      method: "GET"
    })
      .then((response) => response.json().then((data)=>{
        setWords(data)
        console.log(data)
      }))
    getNews()
  }
  
  const getNews = () => {
    fetch("http://146.56.161.252:3000/news", {
      method: "GET"
    })
      .then((response) => response.json().then((data)=>{
        setNews(data)
        console.log(data)
      }))
  }

  const getKeyNews = () => {
    fetch("http://146.56.161.252:3000/news/keyword?keyword=" + "", {
      method: "GET"
    })
      .then((response) => response.json().then((data)=>{
        setKeyNews(data)
        console.log(data)
      }))
  }
  return (
    <div className="app">
      <KeywordHeader />
      <TrendDescription />
      <div id="widget">
        <GoogleTrends
            type="TIMESERIES"
            keyword={keyword.get("keyword")}
            url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
      </div>
      <NewsSection />
      {/**graph */}
    </div>
  );
};

export default App;
