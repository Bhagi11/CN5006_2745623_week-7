import React, { useState ,useEffect} from "react";
import Sunny from './Sunny.png'
import Cloude from './Cloude.png'
import Ranny from './Ranny.png'
function EmojeeCounter(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(Sunny)
const [count,setCount]=useState(0)
useEffect(()=>{
console.log ("function called",props.pic)
if (props.pic==="Sunny")
 setPic(Sunny)
if (props.pic==="Cloude")
 setPic(Cloude)
else if (props.pic==="Ranny")
 setPic(Ranny)
})
const ClickHandle=() =>
 {
 setCount(count+1)
 }
return (
<div className="App">
 <p>{props.pic} <span></span>
 <button onClick={ClickHandle}>{count }
 <img src={pic} alt=""/>
 </button>
 </p>
</div>
)
}
export default EmojeeCounter;
