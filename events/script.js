let count = 0;
const p = document.querySelector('#counter');
const addbtn = document.querySelector('#addbtn');
const subtractbtn = document.querySelector('#subtractbtn');
addbtn.addEventListener('click',()=>{ //count + event
    // alert("clicked")
    count += 1;
    p.innerText = `Count: ${count}`;
})
const p2 = document.createElement('p')          
subtractbtn.addEventListener('click',()=>{ //count -ve event
    if(count>0){
        count -= 1;
        p.innerText = `Count :${count}`;
    }else if(count<1){
        p.innerText = `You cannot decrease less than 0`;
        document.body.append(p2);
        p.style.color = 'rgb(123, 81, 27)';         
    }
})
//button
const btn = document.createElement("button");
btn.innerText = "Reset";
btn.id = "dynamicBtn";
document.body.append(btn);
btn.addEventListener('click',()=>{
    count = 0;
    p.innerText = `Count: ${count}`; 
})
addbtn.addEventListener('mouseover',()=>{
    addbtn.style.background = 'rgb(220, 142, 40)';
})
addbtn.addEventListener('mouseout',()=>{
    addbtn.style.background = 'rgb(114, 46, 59)';
})
subtractbtn.addEventListener('mouseover',()=>{
    subtractbtn.style.background = 'green';
})
subtractbtn.addEventListener('mouseout',()=>{
    subtractbtn.style.background = 'rgb(56, 32, 91)';
})