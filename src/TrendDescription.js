import React from 'react';
import './TrendDescription.css';

const TrendDescription = () => {
  return (
    <div className="trend-description">
      <p>
        최근의 웹앱 개발은 CSR(Client Side Rendering)보다는 SSR(Server Side Rendering)으로 이루어지고 있습니다.
      </p>
      <p>
        SSR은 서버에서 페이지의 HTML을 렌더링하여 클라이언트로 보내주는 방식을 말합니다...
      </p>
      <button className="generate-text-button">텍스트 생성 중</button>
    </div>
  );
};

export default TrendDescription;
