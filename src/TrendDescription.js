import React, { useEffect, useState } from 'react';
import './TrendDescription.css';

const TrendDescription = (props) => {
  const [description, setDescription] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;

    const sendPrompt = async (keyword) => {
        const prompt = `<|begin_of_text|>You are a Korean IT tech expert. Describe in Korean, what does the given keyword mean in terms of AI technology, and why it is important.
    The keyword might be a name of exising service, technology, or terms related to AI Tech.
    <|eot_id|><|start_header_id|>system<|end_header_id|>
    The keyword is "${keyword}". 한국어로 설명해 줘.
    <|eot_id|><|start_header_id|>user<|end_header_id|>
    <|eot_id|><|start_header_id|>assistant<|end_header_id|>`;   
    
    //     return ((await response.json()).content.trim())
        setIsStreaming(true);

        try {
            const response = await fetch("http://127.0.0.1:8080/completion", {
                method: 'POST',
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                body: JSON.stringify({
                    prompt,
                    stop: ["<|eot_id|>"],
                    n_predict: 1024,
                    temperature: 0,
                    stream: true
                },),
                signal
            })

            if (!response.body) throw new Error("not readablestream")

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8")

            let isComplete = false;

            while (!isComplete) {
                const {value, done} = await reader.read();

                if (done) {
                    isComplete = true;
                    break;
                }

                const chunk = decoder.decode(value, {stream: true});
                console.log(chunk)
                const json = JSON.parse(chunk.split(': ')[1])

                if (json.stop) {
                    break;
                }

                const token = json.content

                setDescription(cur => `${cur ?? ''}${token}`);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsStreaming(false);
        }
    }

    sendPrompt(decodeURIComponent(props.keyword), signal)
    .catch(err => {
        if (err.name === "AbordError") {
            console.log("request aborted.");
        }
    })

    const handlePop = () => {
        abort.abort();
    };

    window.addEventListener("popstate", handlePop)

    return () => {
        abort.abort();
        window.removeEventListener("popstate", handlePop);
    }
  }, [])

  return (
    <div className="trend-description">
      {description}
    </div>
  );
};

export default TrendDescription;
