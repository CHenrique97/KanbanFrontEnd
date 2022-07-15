import { useRecoilState } from "recoil";
import CardWriter from "../componets/cardWriter";
import Card from "./card";
import cardState from "./recoil/atom";
import Stage from "./stage"

const Board = () =>{
    const [cards,setCards] = useRecoilState(cardState);

    return(
        <div>
    <Stage/>
    {cards.map((card:any) =>(
      <Card key={card.id} originalX={card.x} originalY={card.y} text={card.content}></Card>
    ))}
    <CardWriter></CardWriter>
    </div>
    )
}   

export default Board;