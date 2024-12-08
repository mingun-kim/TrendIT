import React, {useState} from 'react';
import './App.css';
import GoogleTrends from "./GoogleTrends";
import NewsSection from './NewsSection';
import KeywordHeader from './KeywordHeader';
import TrendDescription from './TrendDescription';
import { useSearchParams } from 'react-router-dom';


const App = () => {
  const [keyword, setKeyword] = useSearchParams()

  return (
    <div className="app">
      <KeywordHeader />
      <TrendDescription keyword={keyword} />
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
