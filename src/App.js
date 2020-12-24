import React, { useEffect, useState } from "react";
import Card from "./Card";

import "./App.css";


function App() {
 
  const [cardDetail, setCardDetail] = useState([]);

  const fetchDataFromUrl = async () => {
    const response = await fetch("https://www.reddit.com/r/reactjs.json");
    const data = await response.json();
    console.log(data.data.children);
    setCardDetail(data.data.children);
  };
  
  useEffect(() => {
    fetchDataFromUrl();
  }, []);
  
  return (
    <div className="App">
      <div className="cards">
        <h1>Task</h1>
        {cardDetail.map((card) => (
          <Card
            title={card.data.title}
            selftext_html={ card.data.selftext_html}
            url={card.data.url}
            score={card.data.score}
          />
        ))}
     
      </div>
    </div>
  );
}

export default App;
