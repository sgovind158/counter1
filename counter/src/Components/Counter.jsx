import React from 'react'

var style1 = {
      color : "green"
}

var style2 ={
    color:"red"
}

let Counter = ()=>{
    const [count,setCount] = React.useState(0)
    const [ isRed, setColor] = React.useState(true)
let Increment = ()=>{

    
    if(count % 2 === 0){
       
        setCount(count + 1)
        setColor(!isRed)
    } else{
        setCount(count + 1)
        setColor(!isRed)
    }
}


let Decrement = ()=>{

    
    if(count % 2 === 0){
       
        setCount(count - 1)
        setColor(!isRed)
    } else{
        setCount(count - 1)
        setColor(!isRed)
    }
}



let Double = ()=>{

    
    if(count % 2 === 0){
        setColor(isRed)
        setCount(count * 2)
       
    } else{
        setCount(count *  2)
        setColor(!isRed)
    }
}

    return(
   <>
   <div >
  <h1  style={{ color: isRed ? 'green' : 'red' }} >Counter App : {count}</h1>
  <button onClick={Increment }  >Increment</button>
  <button onClick={Decrement}>Decrement</button>
  <button onClick={Double}>Double</button>


   </div>
   
   
   
   </>
    )



}


export default Counter