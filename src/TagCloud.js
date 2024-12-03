import React, {useState, useEffect} from 'react';
import "d3-transition";
import { select } from 'd3-selection';
import ReactWordCloud from 'react-wordcloud';
import './TagCloud.css';



const goToKeyword = () => {
  return function (word, event) {
    const text = select(event.target)
    text.on("click", () => {
      console.log(word.text + "clicked")
      //eslint-disable-next-line no-restricted-globals
      location.href = `/keyword?keyword=${word.text}`
    }).transition()
  }
}

const options = {
  rotations: 0,
  fontSizes: [30, 60],
  padding: 3
}

const callbacks = {
  onWordClick: goToKeyword()
}

function TagCloud() {
  const [words, setWords] = useState([])
  useEffect(() => {
    fetch("http://146.56.161.252:3000/keywords")
    .then((response) => response.json().then((data)=>{
      setWords(data)
      console.log(data)
    }))
  }, [])

  return <ReactWordCloud options={options} callbacks={callbacks} words={words} className="cloud"/>
}



export default TagCloud
