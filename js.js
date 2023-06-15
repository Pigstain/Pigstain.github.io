const container = document.querySelector(".container");
function grid(){
    for(let i=0;i<16;i++){
        let rows=document.createElement("div");
        for(let j=0;j<16;j++){
            let divs=document.createElement("div");
            divs.textContent='0';
            divs.classList.add('square');
            rows.appendChild(divs);
            
        }
        container.appendChild(rows);
    }
    
}
grid();
const temp = document.querySelectorAll(".square");
temp.textContent='9';