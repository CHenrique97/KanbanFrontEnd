
import "./CardWriter.css"
import  add from "./../shared/imgs/add.png" 
import { useState } from "react";
import { useRecoilState } from "recoil";
import cardState from "../shared/recoil/atom";
const CardWriter = () => {
  const [cards,setCards] = useRecoilState(cardState);
  const [message, setMessage] = useState('');
  let addButton = () => {
    setCards([...cards,{id:cards.length,content:message,x:0,y:200}]);
  }
  const handleMessageChange = (event: { target: { value: string; }; }) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };
      return   (
      <div className="Card">
        <textarea className="text" 
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}/>
        <img className="Add" src={add} onClick={addButton}/>

        </div>)

}

export default  CardWriter;

