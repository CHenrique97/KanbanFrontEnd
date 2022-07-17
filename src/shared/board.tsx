import { useEffect } from "react";
import { useRecoilState } from "recoil";
import CardWriter from "../componets/cardWriter";
import Card from "./card";
import cardState from "./recoil/atom";
import useLocalStorage from "./recoil/localstorage";
import Stage from "./stage"

const Board = () =>{
    const [cards,setCards] = useRecoilState(cardState);
    const [cardList,setCardList] = useLocalStorage("list",cards);
    useEffect(()=>{
 
        console.log("is not the same");
        setCards(cardList);
      
    },[])
   

    return(
        <div>
    <Stage/>
    {cards.map((card:any) =>(
      <Card key={card.key}  id={card.key} originalX={card.x} originalY={card.y} text={card.content}></Card>
    ))}
    <CardWriter></CardWriter>
    </div>
    )
}   

export default Board;