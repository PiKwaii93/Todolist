import Form from "./Form";
import Card from "./Card";
import React, {useState} from "react";
import ReactDOM from 'react-dom';


function App() {
  const [cards, setCards] = useState([]);

  function handleRemoveID(id){
    let meow = cards.filter(card => card.id != id);
    setCards(meow);
  };
  
  function isFinish(id){
    let wouf = document.getElementById(id);
    if(wouf.style.backgroundColor == "green"){
      wouf.style.backgroundColor = "white";
      wouf.style.color = "black";
      wouf.classList.add("unchecked");
    }else{
      wouf.style.backgroundColor = "green";
      wouf.style.color = "white";
      wouf.classList.remove("unchecked");
    }
  };

  function checkCard(){
    let bzzz = document.querySelectorAll('.unchecked');
    return(bzzz);
  }


  return(
    <div className="container my-5">
      <Form setCards={setCards} checkCard={checkCard}/>
      <div>
        {cards.map((card )=> (
              <Card finishID={isFinish} deleteID={handleRemoveID} title={card.title} content={card.content} id={card.id}key={card.id}/>
        ))} 
      </div>
    </div>
  );
}

export default App;
