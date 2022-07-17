
import "./CardWriter.css"
import  add from "./../shared/imgs/add.png" 
import { useState } from "react";
import { useRecoilState } from "recoil";
import cardState from "../shared/recoil/atom";
import useLocalStorage from "../shared/recoil/localstorage";
const CardWriter = () => {
  let [cards,setCards] = useRecoilState(cardState);
  const [message, setMessage] = useState('');
  const [cardList,setCardList] = useLocalStorage("list",cards);

  let makeId = (length:number) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  let addButton = () => {
    const thisId =makeId(10);
    setCards([...cards,{key:thisId,content:message,x:0,y:200}]);
    setCardList([...cards,{key:thisId,content:message,x:0,y:200}]);

    
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

