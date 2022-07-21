import { useSpring, animated, SpringValue } from '@react-spring/web'
import { createUseGesture, dragAction, useDrag, useGesture } from '@use-gesture/react'
import { FC, useRef } from 'react';
import "./card.css"
import cardState from "../shared/recoil/atom";
import useLocalStorage from "../shared/recoil/localstorage";
import { useRecoilState } from 'recoil';
 interface cardProps  {
   originalX: number,
   originalY : number,  
   text:string,
   id: string

  
}


const Card :FC<cardProps> = (props) => {
  let setX  =  props.originalX;
  let setY  = props.originalY;

  let [{ x, y }, api] = useSpring(() => ({ x: setX, y: setY }))
  const useGesture = createUseGesture([dragAction])
  const ref = useRef(null)
  let [cards,setCards] = useRecoilState(cardState);
  const [cardList,setCardList] = useLocalStorage("list",cards);


  const excludeCard = () =>{
    const cardPosition = cards.findIndex((selectedCard:  any) => selectedCard.key === props.id);
    let newPosCard =  JSON.parse(JSON.stringify(cards));
    newPosCard[cardPosition]={};
    setCards(newPosCard);
    setCardList(newPosCard);
  }
  


  useGesture(
    {
   onDrag({offset :[sx,sy] ,down:isDown })  {
    api.start({ x : sx, y : sy})
    setX=sx;
    setY=sy;
   if (!isDown) {
    const cardPosition = cards.findIndex((selectedCard:  any) => selectedCard.key === props.id);
    let newPosCard =  JSON.parse(JSON.stringify(cards));
    newPosCard[cardPosition]["x"] = setX;
    newPosCard[cardPosition]["y"]= setY;
    setCards(newPosCard);
    setCardList(newPosCard);
    
   }

  }

  },
        {
      target: ref,
      drag: { from: () => [setX , setY] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }) 

  // Bind it to a component
  return (
  
  < animated.div className="Card" ref={ref}  style={{ x, y }}>  
  <button className='exclude' onClick={ () => excludeCard()} >x</button>
     {props.text}
     
  </animated.div>)
    
}

export default Card;