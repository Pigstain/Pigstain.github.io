const container = document.querySelector(".container");
function grid(size){
    for(let i=0;i<size;i++){
        let rows=document.createElement("div");
        for(let j=0;j<size;j++){
            let divs=document.createElement("div");
            divs.classList.add('square');
            divs.addEventListener('mouseenter',()=>{
                //divs.classList.add('hover');
                if(divs.style.backgroundColor===""){
                divs.style.backgroundColor=btn_color.value;
                }
            });
            divs.addEventListener('click',()=>{
                divs.style.backgroundColor="";
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
        item.style.backgroundColor="";
    });
}

function sizeChange(size){
    if(size!==null){
    const temp = document.querySelectorAll('.square');
    temp.forEach(item =>{
        item.remove();
    });
  grid(size);
}
}
function getSize(){
    let size = window.prompt("Please enter desired size");
    if(size>0&&size<=100){
        return size;
    }
    else{
        return null;
    }
}
const btn = document.querySelector('.sizebtn');
btn.addEventListener('click',()=>
    sizeChange(getSize())
);

const btn_reset = document.querySelector('.resetbtn');
btn_reset.addEventListener('click',() =>reset());


const btn_color = document.querySelector('.colorpicker');
btn_color.addEventListener('mouseup',()=>
    function(){
        const marker = document.querySelector('hover');
        const temp = "background-color: "+this.value;
        marker.classList.add(temp);
    }

);





grid(16);