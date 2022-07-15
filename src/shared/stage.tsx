import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import "./stage.css"
const  Stage = () => {
    return (
        <div className='stage'>
        
           <div className="todo"> 
           <h3 className='sector'>To do </h3>
           
           </div>
           <div className="doing"> 
           <h3 className='sector'> Doing </h3>
           </div>
           <div className="done">
            <h3 className='sector'> Done </h3>
            </div>

        </div>
    )
}

export default Stage;