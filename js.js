const container = document.querySelector(".container");
function grid(){
    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){
            let divs=document.createElement("div");
            divs.textContent='0';
            container.appendChild(divs);
        }
    }
    
}
grid();
