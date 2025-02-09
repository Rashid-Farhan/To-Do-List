let inputs = document.querySelector("#input");
let text = document.querySelector(".text");
let add = document.querySelector(".add");

add.addEventListener("click", () =>{
    if(inputs.value === ""){
        alert("add input")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<img src="icon.png">`;
        text.appendChild(newEle);
        inputs.value= "";
        newEle.querySelector("img").addEventListener("click", () =>{
            newEle.remove()
        })
    }
});
