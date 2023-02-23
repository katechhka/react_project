import "./card.css";
import React, {useState} from "react";
function Card() {
  const [isSelected, setisSelected] = useState(false);
  const handleChange=()=>{
    setisSelected(!isSelected);
  }
 
  return (
    <div className="card">
       <h2 className="card__english">kfkfkf</h2>
       <div className="card__transcription">kfkfkf</div>
       <button className={"card__button " +(isSelected? "card__button_hidden":"")} onClick={handleChange}>Проверить</button>
       <div className={"card__translate_hidden "+(isSelected? "card__translate":"")} onClick={handleChange}>Перевод</div>
    </div>
  );
}

export default Card;
