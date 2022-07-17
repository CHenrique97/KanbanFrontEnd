import { atom } from "recoil";

const cardState = atom({
  key: 'cardState', // unique ID (with respect to other atoms/selectors)
  default: [{key:"randomKey",content:'',x:0,y:0}], // default value (aka initial value)
});

export default cardState;