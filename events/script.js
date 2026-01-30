let count = 0;
const p = document.querySelector('#counter');
const addbtn = document.querySelector('#addbtn');
const subtractbtn = document.querySelector('#subtractbtn');
addbtn.addEventListener('click',()=>{
    // alert("clicked")
    count += 1;
    p.innerText = `Count: ${count}`;
})
subtractbtn.addEventListener('click',()=>{
    if(count>0){
        count -= 1;
        p.innerText = `Count :${count}`;
    }else if(count<1){
        p.innerText = `You cannot decrease less than 0`;
        p.style.color = 'rgb(123, 81, 27)';         
    }
})
const p2 = document.createElement('p')          
p2.innerText = 'Hello this is a paragraph';
document.body.append(p2);
//button
const btn = document.createElement("button");
btn.innerText = "Reset";
btn.id = "dynamicBtn";
document.body.append(btn);
btn.addEventListener('click',()=>{
    count = 0;
    p.innerText = `Count: ${count}`; 
})