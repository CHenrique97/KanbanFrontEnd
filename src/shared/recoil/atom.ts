import { atom } from "recoil";

const cardState = atom({
  key: 'cardState', // unique ID (with respect to other atoms/selectors)
  default: [{id:0,content:'',x:0,y:100}], // default value (aka initial value)
});

export default cardState;