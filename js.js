const container = document.querySelector(".container");
function grid(size){
    for(let i=0;i<size;i++){
        let rows=document.createElement("div");
        for(let j=0;j<size;j++){
            let divs=document.createElement("div");
            divs.classList.add('square');
            divs.addEventListener('mouseenter',()=>{
                divs.classList.add('hover');
            });
            divs.addEventListener('click',()=>{
                divs.classList.remove('hover');
            });
            rows.appendChild(divs);
            
        }
        container.appendChild(rows);
    }
    let New = 672/size -2;
    New+='px';
    const newTemp = document.querySelectorAll('.square');
  newTemp.forEach(item =>{
    item.style.width=New;
    item.style.height=New;
});
}

 



function reset(){
    const temp = document.querySelectorAll('.square');
    temp.forEach(item => {
        item.classList.remove('hover');
    });
}

function sizeChange(size){
    const temp = document.querySelectorAll('.square');
    temp.forEach(item =>{
        item.remove();
    });
  grid(size);

  
}
const btn = document.querySelector('.sizebtn');
btn.addEventListener('click',()=>sizeChange(12));

const btn_reset = document.querySelector('.resetbtn');
btn_reset.addEventListener('click',() =>reset());
grid(16);