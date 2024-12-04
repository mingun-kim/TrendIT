import React, { useEffect, useState } from 'react';
import './TrendDescription.css';


const sendPrompt = async (keyword) => {
    const prompt = `
<|begin_of_text|>
You are a Korean IT tech expert. Describe in Korean, what does the given keyword mean in terms of AI technology, and why it is important.
It might be a name of exising service, technology, or terms related to AI Tech.
<|eot_id|><|start_header_id|>system<|end_header_id|>
The keyword is "${keyword}"
<|eot_id|><|start_header_id|>user<|end_header_id|>

<|eot_id|><|start_header_id|>assistant<|end_header_id|>`;   

    const response = await fetch("http://127.0.0.1:8080/completion", {
        method: 'POST',
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
            prompt,
        stop: ["<|eot_id|>"],
        n_predict: 1024,
        temperature: 0,
        })
    })

    return ((await response.json()).content.trim())
}

const TrendDescription = (keyword) => {
  const [description, setDescription] = useState("텍스트 생성 중...")
  
  useEffect(() => {
    sendPrompt(keyword).then(content => setDescription(content))
  }, [keyword])

  return (
    <div className="trend-description">
      {description}
    </div>
  );
};

//<button className="generate-text-button">텍스트 생성 중</button>

export default TrendDescription;
