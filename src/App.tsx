import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from "./shared/card"
import Stage from "./shared/stage"
import CardWriter from './componets/cardWriter'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import cardState from './shared/recoil/atom'
import Board from './shared/board'

function App() {


  return (
    <RecoilRoot>
        <div className='App' >
          <Board></Board>
 </div>

</RecoilRoot>
  )
}

export default App;