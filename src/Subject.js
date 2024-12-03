import './App.css';
import TagCloud from './TagCloud';
import NewsSection from './NewsSection';




const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>오늘의 트렌드</h1>
        {/* <button className="period-button">기간 변경</button> */}
      </header>
      <div id="cloud">
        <TagCloud />
      </div>
      <div className="content">
        <NewsSection />
        {/* <TechStack /> */}
      </div>
    </div>
  );
};

export default App;
