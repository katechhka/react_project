import "./table.css";
import check from "../images/check.png"
import pencil from "../images/pencil.png"
import recycle from "../images/recycle-bin.png"
function Table(props) {
  return (
    <div className={"table__card " +(props.isSelected? "selected":"")}>
       <h2 className="table__english">{props.english}</h2>
       <div className="table__transcription">{props.transcription}</div>
       <div className="table__buttons">
       <button className={"table__button1 table__button " +(props.isSelected? "selected__button":"")}><img src={check} alt="кнопка" className="icon"></img><span>Save</span></button>
        <button className="table__button2 table__button"><img src={pencil} alt="кнопка" className="icon"></img></button>
        <button className="table__button3 table__button"><img src={recycle} alt="кнопка" className="icon"></img></button>
        </div>
    </div>
  );
}

export default Table;
