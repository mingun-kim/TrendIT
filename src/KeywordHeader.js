import React from 'react';
import './KeywordHeader.css';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const [keyword, setKeyword] = useSearchParams()
  return (
    <div className="header">
      <h1>오늘의 트렌드</h1>
      {/* <button className="period-button">기간 변경</button> */}
      <h2 className="trend-keyword">{keyword.get("keyword")}</h2>
      {/* <p className="mention-count">기간 내 언급 수 999회</p> */}
    </div>
  );
};

export default Header;
