const container = document.querySelector(".container");
function grid(size){
    for(let i=0;i<size;i++){
        let rows=document.createElement("div");
        for(let j=0;j<size;j++){
            let divs=document.createElement("div");
            divs.classList.add('square');
            rows.appendChild(divs);
            
        }
        container.appendChild(rows);
    }
    
}
grid(16);
let temp = document.querySelectorAll('.square');

temp.forEach(square => {
    square.addEventListener('mouseenter',()=>{
        square.classList.add('hover');
    });
});

temp.forEach(item=>{
   
    item.addEventListener('click',()=>{
        item.classList.remove('hover');
    });
});


function sizeChange(size){
    for(let i=0;i<size;i++){
        let rows=document.createElement("div");
        for(let j=0;j<size;j++){
            let divs=document.createElement("div");
            divs.classList.add('square');
            rows.appendChild(divs);
            
        }
        container.appendChild(rows);
    }
}
const btn = document.querySelector('.sizebtn');
btn.addEventListener('click',()=>sizeChange(32));