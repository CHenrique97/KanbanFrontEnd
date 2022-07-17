import { useSpring, animated, SpringValue } from '@react-spring/web'
import { createUseGesture, dragAction, useDrag, useGesture } from '@use-gesture/react'
import { FC, useRef } from 'react';
import "./card.css"

 interface cardProps  {
   originalX: number,
   originalY : number,  
   text:string
   key: string

  
}


const Card :FC<cardProps> = (props) => {
  let setX  =  props.originalX;
  let setY  = props.originalY;
  let [{ x, y }, api] = useSpring(() => ({ x: setX, y: setY }))
  const useGesture = createUseGesture([dragAction])
  const ref = useRef(null)
  // Set the drag hook and define component movement based on gesture data
  const bind =useGesture(
    {
   onDrag({offset :[sx,sy] ,down:isDown })  {
    api.start({ x : sx, y : sy})
    setX=sx;
    setY=sy;
   if (isDown===false) {
    console.log("You stoped holding the button")
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
     {props.text}
  </animated.div>)
    
}

export default Card;