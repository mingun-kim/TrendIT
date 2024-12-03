import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const categories = [
    { title: "Data", icon: "svgs/data.svg" },
    { title: "AI", icon: "svgs/ai.svg" },
    { title: "Embedded", icon: "svgs/embedded.svg" },
    { title: "Web / App", icon: "svgs/web_app.svg" },
    { title: "Game", icon: "svgs/game.svg" },
    { title: "Security", icon: "svgs/security.svg" },
    { title: "Cloud", icon: "svgs/cloud.svg" },
    { title: "DevOps", icon: "svgs/devops.svg" },
    { title: "Programming Language", icon: "svgs/programming_language.svg" },
    { title: "Network", icon: "svgs/network.svg" },
  ]
  
  const navigate = useNavigate();
  const goToSub = (sub) => {
    navigate(`/subject?subject=${sub}`)
  }
  
  return (
    <div className="app">
      <header className="header" id='header'>
        <h1 id='mainH'>TrendIT</h1>
        <p>지금 이 순간의 IT 트렌드를 추적, 분석합니다.</p>
      </header>
      <section className="categories">
        {categories.map((category, index) => (
          <button key={index} className="category-card" onClick={() => goToSub(category.title)}>
            <img src={category.icon} className="icon"/>
            <h3>{category.title}</h3>
          </button>
        ))}
      </section>
    </div>
  );
};

export default App;
