import { useState } from "react";

function Cart(){
    const [item , setItem]=useState('');
    const [cartList , setCartList]=useState([]);
    function addItems(){
        if(!item){
            alert('add an item before adding to Cart');
        }
        setCartList([...cartList,item]);
        setItem('')
        // setItem([...item,cartList]);
        // setCartList('');
    }
    function removeitem(index) {
  setCartList(cartList.filter((_, i) => i !== index));
}
    return(
        <>
        <input type="text" onChange={(e)=>setItem(e.target.value)}/>
        <button onClick={addItems}>Add</button>
        <h2>Cart</h2>
        {cartList.length===0 && <p>Your cart is empty</p>}
        <ol>{cartList.map((item,index)=>(
       <li key={index}>
        <p>{item} <button onClick={() => removeitem(index)}>Remove Item</button></p>
        
       </li>
        ))}  </ol>  
      </>
    )
}
export default Cart